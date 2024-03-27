function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors']; // Define an array of choices: rock, paper, and scissors
    var computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Generate a random choice for the computer

    var result; // Variable to store the result of the game
    // Determine the outcome of the game
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

     // Update the HTML to display the player and computer choices, images, and outcome
    document.getElementById('player-choice').innerText = playerChoice;
    document.getElementById('computer-choice').innerText = computerChoice;
    document.getElementById('player-img').src = `./images/${playerChoice}.png`; // Display player's choice image
    document.getElementById('computer-img').src = `./images/${computerChoice}.png`; // Display computer's choice image
    document.getElementById('outcome').innerText = result; // Display the outcome of the game

}
