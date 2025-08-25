function convertWeight() {
    const input = parseFloat(document.getElementById('weightInput').value);
    const unit = document.getElementById('weightUnit').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('weightResult').textContent = "Please enter a valid number";
        return;
    }

    if (unit === 'kg') {
        result = input * 2.20462;
        document.getElementById('weightResult').textContent = `${input} kg = ${result.toFixed(2)} pounds`;
    } else {
        result = input * 0.453592;
        document.getElementById('weightResult').textContent = `${input} pounds = ${result.toFixed(2)} kg`;
    }
}

function convertTemperature() {
    const input = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('tempUnit').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('tempResult').textContent = "Please enter a valid number";
        return;
    }

    if (unit === 'c') {
        result = (input * 9 / 5) + 32;
        document.getElementById('tempResult').textContent = `${input}°C = ${result.toFixed(2)}°F`;
    } else {
        result = (input - 32) * 5 / 9;
        document.getElementById('tempResult').textContent = `${input}°F = ${result.toFixed(2)}°C`;
    }
}

function convertDistance() {
    const input = parseFloat(document.getElementById('distanceInput').value);
    const unit = document.getElementById('distanceUnit').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('distanceResult').textContent = "Please enter a valid number";
        return;
    }

    if (unit === 'm') {
        result = input * 0.621371;
        document.getElementById('distanceResult').textContent = `${input} km = ${result.toFixed(6)} miles`;
    } else {
        result = input * 1.60934;
        document.getElementById('distanceResult').textContent = `${input} miles = ${result.toFixed(2)} km`;
    }
}

// Allow pressing Enter key to convert
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const converterId = this.id.replace('Input', '');
            if (converterId === 'weight') convertWeight();
            if (converterId === 'temp') convertTemperature();
            if (converterId === 'distance') convertDistance();
        }
    });
});
