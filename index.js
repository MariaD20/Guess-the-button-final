function luckyWinner(chosenBtn) {
  var luckyNo = Math.floor(Math.random() * 3) + 1;
  if (chosenBtn == luckyNo) {
    alert("This really is your lucky button! One more time!");
  } else {
    alert("You lost! I encourage you to try again!");
  }
}
