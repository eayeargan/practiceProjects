

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`${userInput} is invalid, please provide a valid choice: rock.`)
  }
  
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!"
  };
  if (userChoice === 'bomb') {
    return "BOOM!!! The human blew up the computer!"
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "The computer wins!"
    } else {
      return "The human wins!"
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return "The human wins!"
    } else {
      return "The computer wins!"
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return "The human wins!"
    } else {
      return "The computer wins!"
    }
  } else {
    return "Something really weird is going on...!"
  }

}

const playGame = (userInput) => {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();

  console.log(userChoice + ' VS ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}


