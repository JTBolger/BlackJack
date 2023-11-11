var tableRim = document.getElementById("table-rim");
var table = document.getElementById("table");
var startButton = document.getElementById("start");
var playArea = document.getElementById("play-area")
var card = document.getElementById("card-inner")
var coinHolder = document.getElementById("balance")
var betDisplay = document.getElementById("bet")
var incBet = document.getElementById("add-bet")
var decBet = document.getElementById("subtract-bet")
var finBet = document.getElementById("confirm-bet")

var bank = 100
var bet = 0
var balance = document.getElementById("money")
balance.innerHTML = "$"+bank+".00"

function startGame() {
    startButton.style.opacity = "0"
    startButton.style.cursor = "auto"
    tableRim.style.height = "105%"
    tableRim.style.borderTopRightRadius = "0"
    tableRim.style.borderTopLeftRadius = "0"
    table.style.height = "105%"
    table.style.borderTopRightRadius = "0"
    table.style.borderTopLeftRadius = "0"
    playArea.style.marginBottom = "0"
    playArea.style.borderTopRightRadius = "0"
    playArea.style.borderTopLeftRadius = "0"
    coinHolder.style.opacity = "1"
}

function flipCard() {
    card.style.transform = "rotateY(180deg)"
}


const deck = [
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'
  ];
  
//   // Example usage:
//   const randomCard = pickRandomCard(deck);
//   console.log(randomCard);


function addBet(amount) {
    if (bank < (bet + amount)) {
        console.error("bet amount exceeds bank amount")
    }
    else if (bank >= (bet + amount)) {
        bet = (bet + amount)
        betDisplay.innerHTML = "$"+bet+".00"
        console.log("amount after change = "+bet)
    }
}
function subtractBet(amount) {
    if ((bet - amount) <= 0) {
        console.error("bet amount cannot be less than or equal to zero")
    }
    else if ((bet - amount) > 0) {
        bet = (bet - amount)
        betDisplay.innerHTML = "$"+bet+".00"
        console.log("amount after change = "+bet)
    }
}
function confirmBet() {
    if ((bet <= bank) && (bet > 0)) {
        incBet.style.display = "none"
        decBet.style.display = "none"
        finBet.style.display = "none"
        bank = bank - bet
        balance.innerHTML = "$"+bank+".00"
        beginDeal()
    }
}

function randomCard(deck) {
    const randomIndex = Math.floor(Math.random() *deck.length);
    return deck[randomIndex];
}

var dCard1 = document.getElementById("dCard1")
var dCard2 = document.getElementById("dCard2")
var dCard3 = document.getElementById("dCard3")
var dCard4 = document.getElementById("dCard4")
var dCard5 = document.getElementById("dCard5")
var dCard6 = document.getElementById("dCard6")
var dCard7 = document.getElementById("dCard7")
var dCard8 = document.getElementById("dCard8")
var dCard9 = document.getElementById("dCard9")
var pCard1 = document.getElementById("pCard1")
var pCard2 = document.getElementById("pCard2")
var pCard3 = document.getElementById("pCard3")
var pCard4 = document.getElementById("pCard4")
var pCard5 = document.getElementById("pCard5")
var pCard6 = document.getElementById("pCard6")
var pCard7 = document.getElementById("pCard7")
var pCard8 = document.getElementById("pCard8")
var pCard9 = document.getElementById("pCard9")

var cardFace = document.getElementById("card")

function drawCard(dealingCard) {
    if (dealingCard == 1) {
        dCard1.style.display = "block"
        dCard1 = randomCard(deck)
        console.log("dCard1 = "+dCard1)
        document.getElementById("dCard1-front").innerHTML = dCard1
    }
    else if (dealingCard == 2) {
        dCard2.style.display = "block"
        dCard2 = randomCard(deck)
        console.log("dCard2 = "+dCard2)
        document.getElementById("dCard2-front").innerHTML = "<img src=\"images/PlayingCardBack.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (dealingCard == 3) {
        dCard3.style.display = "block"
        dCard3 = randomCard(deck)
        console.log("dCard3 = "+dCard3)
        document.getElementById("dCard3-front").innerHTML = dCard3
        dCard3.style.display = "block"
    }
    else if (dealingCard == 4) {
        dCard4.style.display = "block"
        dCard4 = randomCard(deck)
        console.log("dCard4 = "+dCard4)
        document.getElementById("dCard4-front").innerHTML = dCard4
    }
    else if (dealingCard == 5) {
        dCard5.style.display = "block"
        dCard5 = randomCard(deck)
        console.log("dCard5 = "+dCard5)
        document.getElementById("dCard5-front").innerHTML = dCard5
    }
    else if (dealingCard == 6) {
        dCard6.style.display = "block"
        dCard6 = randomCard(deck)
        console.log("dCard6 = "+dCard6)
        document.getElementById("dCard6-front").innerHTML = dCard6
    }
    else if (dealingCard == 7) {
        dCard7.style.display = "block"
        dCard7 = randomCard(deck)
        console.log("dCard7 = "+dCard7)
        document.getElementById("dCard7-front").innerHTML = dCard7
    }
    else if (dealingCard == 8) {
        dCard8.style.display = "block"
        dCard8 = randomCard(deck)
        console.log("dCard8 = "+dCard8)
        document.getElementById("dCard8-front").innerHTML = dCard8
    }
    else if (dealingCard == 9) {
        dCard9.style.display = "block"
        dCard9 = randomCard(deck)
        console.log("dCard9 = "+dCard9)
        document.getElementById("dCard9-front").innerHTML = dCard9
    }
    else if (dealingCard == 10) {
        pCard1.style.display = "block"
        pCard1 = randomCard(deck)
        console.log("pCard1 = "+pCard1)
        document.getElementById("pCard1-front").innerHTML = pCard1
    }
    else if (dealingCard == 11) {
        pCard2.style.display = "block"
        pCard2 = randomCard(deck)
        console.log("pCard2 = "+pCard2)
        document.getElementById("pCard2-front").innerHTML = pCard2
    }
    else if (dealingCard == 12) {
        pCard3.style.display = "block"
        pCard3 = randomCard(deck)
        console.log("pCard3 = "+pCard3)
        document.getElementById("pCard3-front").innerHTML = pCard3
    }
    else if (dealingCard == 13) {
        pCard4.style.display = "block"
        pCard4 = randomCard(deck)
        console.log("pCard4 = "+pCard4)
        document.getElementById("pCard4-front").innerHTML = pCard4
    }
    else if (dealingCard == 14) {
        pCard5.style.display = "block"
        pCard5 = randomCard(deck)
        console.log("pCard5 = "+pCard5)
        document.getElementById("pCard5-front").innerHTML = pCard5
    }
    else if (dealingCard == 15) {
        pCard6.style.display = "block"
        pCard6 = randomCard(deck)
        console.log("pCard6 = "+pCard6)
        document.getElementById("pCard6-front").innerHTML = pCard6
    }
    else if (dealingCard == 16) {
        pCard7.style.display = "block"
        pCard7 = randomCard(deck)
        console.log("pCard7 = "+pCard7)
        document.getElementById("pCard7-front").innerHTML = pCard7
    }
    else if (dealingCard == 17) {
        pCard8.style.display = "block"
        pCard8 = randomCard(deck)
        console.log("pCard8 = "+pCard8)
        document.getElementById("pCard8-front").innerHTML = pCard8
    }
    else if (dealingCard == 18) {
        pCard9.style.display = "block"
        pCard9 = randomCard(deck)
        console.log("pCard9 = "+pCard9)
        document.getElementById("pCard9-front").innerHTML = pCard9
    }
}

function beginDeal() {
    drawCard(1)
    drawCard(2)
    drawCard(10)
    drawCard(11)
}