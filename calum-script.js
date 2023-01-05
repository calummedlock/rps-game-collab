function playGame(userChoice) {
  let choose = ["r","p","s"]
  let computerChoice = choose[Math.floor(Math.random() * choose.length)];

  

}

  // let userChoice = prompt("Enter your choice (type r, s, or p)");
  // playGame(userChoice)

  let wins = 0;
  let ties = 0;
  let losses = 0;

  for (let index = 0; index < 10; index++) {
    let userChoice = prompt("Enter your choice (type r, s, or p)");

    if (userChoice == computerChoice) {
      console.log ("It's a tie!");
    } else if (userChoice == "r" && computerChoice == "s") {
      console.log ("You win!");
    } else if (userChoice == "p" && computerChoice == "r") {
      console.log ("You win!");
    } else if (userChoice == "s" && computerChoice == "p") {
      console.log ("You win!");
    } else {
      console.log ("You lose!")
    }

    if (userChoice == computerChoice)
}