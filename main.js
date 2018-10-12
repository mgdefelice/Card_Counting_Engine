let count = 0;
let betOrHold;
document.getElementById("theCount").innerHTML = betOrHold;

function countingCards(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "Jack":
    case "Queen":
    case "King":
    case "Ace":
      count--;
      break;
    case 19:
      count = 0;
  }

  if (count >= 0) {
    betOrHold = count + " Low Bets";
    document.getElementById("theCount").innerHTML = betOrHold;
    if (count > 5) {
      betOrHold = count + " High Bets, VERY HOT";
      document.getElementById("theCount").innerHTML = betOrHold;
    }
  } else if (count <= 0) {
    betOrHold = count + "Low Bets";
    document.getElementById("theCount").innerHTML = betOrHold;
    if (count < -5) {
      betOrHold = count + "Low Bets, VERY COLD";
      document.getElementById("theCount").innerHTML = betOrHold;
    }
  }
}
