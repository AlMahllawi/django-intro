document.addEventListener('DOMContentLoaded', () => {
    const wordElement = document.getElementById('word');
    const messageElement = document.getElementById('message');
    const mistakesElement = document.getElementById('mistakes');
    const scoreElement = document.getElementById('score');
    const keyboardElement = document.getElementById('keyboard');
    const hangmanParts = document.querySelectorAll('#hangman div');

    const maxMistakes = 6;
    const word = wordElement.getAttribute('data-value');
    let displayedWord = [];
    let mistakes = 0;
    let score = 0;
    let gameOver = false;

    function handleGuess(letter) {
        if (gameOver) return;

        const buttons = document.querySelectorAll('.letter');
        const button = Array.from(buttons).find(btn => btn.getAttribute('data-letter') === letter);

        if (button.classList.contains('correct') || button.classList.contains('incorrect')) return;

        if (word.includes(letter)) {
            button.classList.add('correct');

            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) displayedWord[i] = letter;
            }

            wordElement.textContent = displayedWord.join(' ');

            if (!displayedWord.includes('_')) gameWon();
        } else {
            button.classList.add('incorrect');

            mistakes++;
            mistakesElement.textContent = mistakes;

            if (mistakes <= maxMistakes) hangmanParts[mistakes - 1].style.display = 'block';

            if (mistakes === maxMistakes) gameLost();
        }
    }

    function gameWon() {
        gameOver = true;
        messageElement.textContent = 'Congratulations! You won!';
        messageElement.style.color = '#4CAF50';
        score += 10; // TODO: send to database
        scoreElement.textContent = score;
    }

    function gameLost() {
        gameOver = true;
        messageElement.textContent = `Game over! The word was: ${word}`;
        messageElement.style.color = '#f44336';
        wordElement.textContent = word.split('').join(' ');
    }

    displayedWord = [];
    mistakesElement.textContent = mistakes;
    messageElement.textContent = '';

    hangmanParts.forEach(part => part.style.display = 'none');

    for (let i = 0; i < word.length; i++) displayedWord.push('_');

    wordElement.textContent = displayedWord.join(' ');

    keyboardElement.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('letter');
        button.setAttribute('data-letter', letter);
        button.addEventListener('click', () => handleGuess(letter));
        keyboardElement.appendChild(button);
    }
});
