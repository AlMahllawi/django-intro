document.addEventListener('DOMContentLoaded', () => {
    // Game variables
    const words = [
        { word: "apple", category: "Fruits" },
        { word: "banana", category: "Fruits" },
        { word: "orange", category: "Fruits" },
        { word: "grapes", category: "Fruits" },
        { word: "python", category: "Programming Languages" },
        { word: "javascript", category: "Programming Languages" },
        { word: "html", category: "Web Technologies" },
        { word: "css", category: "Web Technologies" },
        { word: "elephant", category: "Animals" },
        { word: "giraffe", category: "Animals" }
    ];

    let selectedWord = '';
    let selectedCategory = '';
    let displayedWord = [];
    let mistakes = 0;
    let score = 0;
    let gameOver = false;
    const maxMistakes = 6;

    // DOM elements
    const wordDisplayElement = document.getElementById('word-display');
    const messageElement = document.getElementById('message');
    const mistakesElement = document.getElementById('mistakes');
    const scoreElement = document.getElementById('score');
    const categoryElement = document.getElementById('category');
    const keyboardElement = document.getElementById('keyboard');
    const resetButton = document.getElementById('reset-button');
    const hangmanParts = document.querySelectorAll('.part');

    // Initialize the game
    function initGame() {
        // Reset game state
        mistakes = 0;
        gameOver = false;
        displayedWord = [];
        mistakesElement.textContent = mistakes;
        messageElement.textContent = '';

        // Hide all hangman parts
        hangmanParts.forEach(part => part.style.display = 'none');

        // Select a random word
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedWord = words[randomIndex].word;
        selectedCategory = words[randomIndex].category;

        // Initialize the displayed word with underscores
        for (let i = 0; i < selectedWord.length; i++) {
            displayedWord.push('_');
        }

        // Update the UI
        wordDisplayElement.textContent = displayedWord.join(' ');
        categoryElement.textContent = `Category: ${selectedCategory}`;

        // Create the keyboard
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
    }

    // Handle letter guess
    function handleGuess(letter) {
        if (gameOver) return;

        const buttons = document.querySelectorAll('.letter');
        const button = Array.from(buttons).find(btn => btn.getAttribute('data-letter') === letter);

        // If the letter was already guessed
        if (button.classList.contains('correct') || button.classList.contains('incorrect')) {
            return;
        }

        // Check if the letter is in the word
        if (selectedWord.includes(letter)) {
            // Correct guess
            button.classList.add('correct');

            // Update the displayed word
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === letter) {
                    displayedWord[i] = letter;
                }
            }

            wordDisplayElement.textContent = displayedWord.join(' ');

            // Check if the player has won
            if (!displayedWord.includes('_')) {
                gameWon();
            }
        } else {
            // Incorrect guess
            button.classList.add('incorrect');
            mistakes++;
            mistakesElement.textContent = mistakes;

            // Show the next hangman part
            if (mistakes <= maxMistakes) {
                hangmanParts[mistakes - 1].style.display = 'block';
            }

            // Check if the player has lost
            if (mistakes === maxMistakes) {
                gameLost();
            }
        }
    }

    // Game won function
    function gameWon() {
        gameOver = true;
        messageElement.textContent = 'Congratulations! You won!';
        messageElement.style.color = '#4CAF50';
        score += 10;
        scoreElement.textContent = score;
    }

    // Game lost function
    function gameLost() {
        gameOver = true;
        messageElement.textContent = `Game over! The word was: ${selectedWord}`;
        messageElement.style.color = '#f44336';

        // Reveal the word
        wordDisplayElement.textContent = selectedWord.split('').join(' ');
    }

    // Event listener for reset button
    resetButton.addEventListener('click', initGame);

    // Initialize the game on page load
    initGame();
});
