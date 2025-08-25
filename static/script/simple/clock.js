const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital-clock');
const dateDisplay = document.querySelector('.date-display');

function setDate() {
    const now = new Date();

    // Analog clock
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // Digital clock
    const hoursFormatted = String(hour).padStart(2, '0');
    const minsFormatted = String(mins).padStart(2, '0');
    const secsFormatted = String(seconds).padStart(2, '0');
    digitalClock.textContent = `${hoursFormatted}:${minsFormatted}:${secsFormatted}`;

    // Date display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Update the clock immediately and then every second
setDate();
setInterval(setDate, 1000);