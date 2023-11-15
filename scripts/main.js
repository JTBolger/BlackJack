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
var hitButton = document.getElementById("hit-button")
var stayButton = document.getElementById("stay-button")

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
  
// Test Teck //
// const deck = [
//     '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
//     '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
//     '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
//     '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//     '10H', '10H', '10H', '10H', '10H', 'AH', 'AH', 'AH', 'AH', 'AH',
//   ];



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

var dCard1Style = document.getElementById("dCard1")
var dCard2Style = document.getElementById("dCard2")
var dCard3Style = document.getElementById("dCard3")
var dCard4Style = document.getElementById("dCard4")
var dCard5Style = document.getElementById("dCard5")
var dCard6Style = document.getElementById("dCard6")
var dCard7Style = document.getElementById("dCard7")
var dCard8Style = document.getElementById("dCard8")
var dCard9Style = document.getElementById("dCard9")
var pCard1Style = document.getElementById("pCard1")
var pCard2Style = document.getElementById("pCard2")
var pCard3Style = document.getElementById("pCard3")
var pCard4Style = document.getElementById("pCard4")
var pCard5Style = document.getElementById("pCard5")
var pCard6Style = document.getElementById("pCard6")
var pCard7Style = document.getElementById("pCard7")
var pCard8Style = document.getElementById("pCard8")
var pCard9Style = document.getElementById("pCard9")

var dCard1 = 0
var dCard2 = 0
var dCard3 = 0
var dCard4 = 0
var dCard5 = 0
var dCard6 = 0
var dCard7 = 0
var dCard8 = 0
var dCard9 = 0
var pCard1 = 0
var pCard2 = 0
var pCard3 = 0
var pCard4 = 0
var pCard5 = 0
var pCard6 = 0
var pCard7 = 0
var pCard8 = 0
var pCard9 = 0

var cardFace = document.getElementById("card")

var hitNumber = 0
var dealerValue = 0
var playerValue = 0
var playerHand = []
var dealerHand = []
function addCardToPlayerHand(newCard) {
    playerHand.push(newCard)
}
function addCardToDealerHand(newCard) {
    dealerHand.push(newCard)
}
function drawCard(dealingCard) {
    if (dealingCard == 1) {
        dCard1Style.style.display = "block"
        dCard1 = randomCard(deck)
        addCardToDealerHand(dCard1)
        console.log("dCard1 = "+dCard1)
        document.getElementById("dCard1-front").innerHTML = dCard1
        calculateDealerValue(dealerHand)
        document.getElementById("dealer-value").innerHTML = Value(dCard1)
        changePicture(dCard1)
        hitNumber = 11
    }
    else if (dealingCard == 2) {
        dCard2Style.style.display = "block"
        dCard2 = randomCard(deck)
        addCardToDealerHand(dCard2)
        console.log("dCard2 = "+dCard2)
        document.getElementById("dCard2-front").innerHTML = "<img src=\"images/Blackjack game/1.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        calculateDealerValue(dealerHand)
        document.getElementById("dealer-value").innerHTML = Value(dCard1)
        hitNumber = 12
    }
    else if (dealingCard == 3) {
        dCard3Style.style.display = "block"
        dCard3 = randomCard(deck)
        addCardToDealerHand(dCard3)
        console.log("dCard3 = "+dCard3)
        document.getElementById("dCard3-front").innerHTML = dCard3
        calculateDealerValue(dealerHand)
        changePicture(dCard3)
        hitNumber = 13
    }
    else if (dealingCard == 4) {
        dCard4Style.style.display = "block"
        dCard4 = randomCard(deck)
        addCardToDealerHand(dCard4)
        console.log("dCard4 = "+dCard4)
        document.getElementById("dCard4-front").innerHTML = dCard4
        calculateDealerValue(dealerHand)
        changePicture(dCard4)
        hitNumber = 14
    }
    else if (dealingCard == 5) {
        dCard5Style.style.display = "block"
        dCard5 = randomCard(deck)
        addCardToDealerHand(dCard5)
        console.log("dCard5 = "+dCard5)
        document.getElementById("dCard5-front").innerHTML = dCard5
        calculateDealerValue(dealerHand)
        changePicture(dCard5)
        hitNumber = 15
    }
    else if (dealingCard == 6) {
        dCard6.style.display = "block"
        dCard6 = randomCard(deck)
        console.log("dCard6 = "+dCard6)
        document.getElementById("dCard6-front").innerHTML = dCard6
        calculateDealerValue(pCard6)
        changePicture(dCard6)
        hitNumber = 16
    }
    else if (dealingCard == 7) {
        dCard7.style.display = "block"
        dCard7 = randomCard(deck)
        console.log("dCard7 = "+dCard7)
        document.getElementById("dCard7-front").innerHTML = dCard7
        calculateDealerValue(dCard7)
        changePicture(dCard7)
        hitNumber = 17
    }
    else if (dealingCard == 8) {
        dCard8.style.display = "block"
        dCard8 = randomCard(deck)
        console.log("dCard8 = "+dCard8)
        document.getElementById("dCard8-front").innerHTML = dCard8
        calculateDealerValue(dCard8)
        changePicture(dCard8)
        hitNumber = 18
    }
    else if (dealingCard == 9) {
        dCard9.style.display = "block"
        dCard9 = randomCard(deck)
        console.log("dCard9 = "+dCard9)
        document.getElementById("dCard9-front").innerHTML = dCard9
        calculateDealerValue(dCard9)
        changePicture(dCard9)
        hitNumber = 19
    }
    else if (dealingCard == 10) {
        pCard1Style.style.display = "block"
        pCard1 = randomCard(deck)
        addCardToPlayerHand(pCard1)
        console.log("pCard1 = "+pCard1)
        document.getElementById("pCard1-front").innerHTML = pCard1
        calculatePlayerValue(playerHand)
        hitNumber = 1
        changePicture(pCard1)
    }
    else if (dealingCard == 11) {
        pCard2Style.style.display = "block"
        pCard2 = randomCard(deck)
        addCardToPlayerHand(pCard2)
        console.log("pCard2 = "+pCard2)
        document.getElementById("pCard2-front").innerHTML = pCard2
        calculatePlayerValue(playerHand)
        hitNumber = 2
        changePicture(pCard2)
    }
    else if (dealingCard == 12) {
        pCard3Style.style.display = "block"
        pCard3 = randomCard(deck)
        addCardToPlayerHand(pCard3)
        console.log("pCard3 = "+pCard3)
        document.getElementById("pCard3-front").innerHTML = pCard3
        calculatePlayerValue(playerHand)
        hitNumber = 3
        changePicture(pCard3)
    }
    else if (dealingCard == 13) {
        pCard4Style.style.display = "block"
        pCard4 = randomCard(deck)
        addCardToPlayerHand(pCard4)
        console.log("pCard4 = "+pCard4)
        document.getElementById("pCard4-front").innerHTML = pCard4
        calculatePlayerValue(playerHand)
        hitNumber = 4
        changePicture(pCard4)
    }
    else if (dealingCard == 14) {
        pCard5Style.style.display = "block"
        pCard5 = randomCard(deck)
        addCardToPlayerHand(pCard5)
        console.log("pCard5 = "+pCard5)
        document.getElementById("pCard5-front").innerHTML = pCard5
        calculatePlayerValue(playerHand)
        hitNumber = 5
        changePicture(pCard5)
    }
    else if (dealingCard == 15) {
        pCard6.style.display = "block"
        pCard6 = randomCard(deck)
        console.log("pCard6 = "+pCard6)
        document.getElementById("pCard6-front").innerHTML = pCard6
        calculatePlayerValue(pCard6)
        hitNumber = 6
        changePicture(pCard6)
    }
    else if (dealingCard == 16) {
        pCard7.style.display = "block"
        pCard7 = randomCard(deck)
        console.log("pCard7 = "+pCard7)
        document.getElementById("pCard7-front").innerHTML = pCard7
        calculatePlayerValue(pCard7)
        hitNumber = 7
        changePicture(pCard7)
    }
    else if (dealingCard == 17) {
        pCard8.style.display = "block"
        pCard8 = randomCard(deck)
        console.log("pCard8 = "+pCard8)
        document.getElementById("pCard8-front").innerHTML = pCard8
        calculatePlayerValue(pCard8)
        hitNumber = 8
        changePicture(pCard8)
    }
    else if (dealingCard == 18) {
        pCard9.style.display = "block"
        pCard9 = randomCard(deck)
        console.log("pCard9 = "+pCard9)
        document.getElementById("pCard9-front").innerHTML = pCard9
        calculatePlayerValue(pCard9)
        hitNumber = 9
        changePicture(pCard9)
    }
}

function beginDeal() {
    hitButton.style.display = "flex"
    stayButton.style.display = "flex"
    drawCard(1)
    setTimeout(drawCardTwo, 500)
    setTimeout(drawCardTen, 1000)
    setTimeout(drawCardEleven, 1500)
}
function drawCardTwo() {
    drawCard(2)
}
function drawCardTen() {
    drawCard(10)
}
function drawCardEleven() {
    drawCard(11)
}
function drawCardThree() {
    drawCard(3)
    calculateDealerValue()
}
function drawCardFour() {
    drawCard(4)
    calculateDealerValue()
}
function drawCardFive() {
    drawCard(5)
    calculateDealerValue()
}


function Value(card) {
    if (card == "2C") {
        return 2
    }
    else if (card == "3C") {
        return 3
    }
    else if (card == "4C") {
        return 4
    }
    else if (card == "5C") {
        return 5
    }
    else if (card == "6C") {
        return 6
    }
    else if (card == "7C") {
        return 7
    }
    else if (card == "8C") {
        return 8
    }
    else if (card == "9C") {
        return 9
    }
    else if (card == "10C") {
        return 10
    }
    else if (card == "JC") {
        return 10
    }
    else if (card == "QC") {
        return 10
    }
    else if (card == "KC") {
        return 10
    }
    else if (card == "2D") {
        return 2
    }
    else if (card == "3D") {
        return 3
    }
    else if (card == "4D") {
        return 4
    }
    else if (card == "5D") {
        return 5
    }
    else if (card == "6D") {
        return 6
    }
    else if (card == "7D") {
        return 7
    }
    else if (card == "8D") {
        return 8
    }
    else if (card == "9D") {
        return 9
    }
    else if (card == "10D") {
        return 10
    }
    else if (card == "JD") {
        return 10
    }
    else if (card == "QD") {
        return 10
    }
    else if (card == "KD") {
        return 10
    }
    else if (card == "2H") {
        return 2
    }
    else if (card == "3H") {
        return 3
    }
    else if (card == "4H") {
        return 4
    }
    else if (card == "5H") {
        return 5
    }
    else if (card == "6H") {
        return 6
    }
    else if (card == "7H") {
        return 7
    }
    else if (card == "8H") {
        return 8
    }
    else if (card == "9H") {
        return 9
    }
    else if (card == "10H") {
        return 10
    }
    else if (card == "JH") {
        return 10
    }
    else if (card == "QH") {
        return 10
    }
    else if (card == "KH") {
        return 10
    }
    else if (card == "2S") {
        return 2
    }
    else if (card == "3S") {
        return 3
    }
    else if (card == "4S") {
        return 4
    }
    else if (card == "5S") {
        return 5
    }
    else if (card == "6S") {
        return 6
    }
    else if (card == "7S") {
        return 7
    }
    else if (card == "8S") {
        return 8
    }
    else if (card == "9S") {
        return 9
    }
    else if (card == "10S") {
        return 10
    }
    else if (card == "JS") {
        return 10
    }
    else if (card == "QS") {
        return 10
    }
    else if (card == "KS") {
        return 10
    }
    else if (card == "AH") {
        return 11
    }
    else if (card == "AC") {
        return 11
    }
    else if (card == "AD") {
        return 11
    }
    else if (card == "AS") {
        return 11
    }
}

function HIT() {
    if (playerValue < 21) {
        drawCard((hitNumber + 10))
    }
    else {
        console.error("player has busted/reached 21")
    }
    testForBust(1)
}
function STAY() {
    hitButton.style.display = "none"
    stayButton.style.display = "none"
    hitNumber = 12;
    console.log("Player is staying on: " + playerValue);
    document.getElementById("dCard2-front").innerHTML = dCard2;
    document.getElementById("dealer-value").innerHTML = dealerValue;
    for (i=0; i<3; i++) {
        if (dealerValue < 17) {
            setTimeout(dealerHIT, 500)
        }
    }
    testForWin()
    setTimeout(resetGame, 3000)
}

function dealerHIT() {
    if (dealerValue < 17) {
        drawCardThree()
        if ((dealerValue + Value(dCard3)) < 17) {
            drawCardFour()
            if ((dealerValue + Value(dCard3) + Value(dCard4)) < 17) {
                drawCardFive()
            }
        }
    }
}


function testForBust(side) {
    if (side == 1) {
        if (playerValue >= 21) {
            console.warn("Player has busted ! "+playerValue)
            STAY()
        }
    }
    else if (side == 2) {
        if ((dealerValue >= 17)) {
            console.warn("Dealer is staying / Dealer has busted ! "+dealerValue)
        }
        else {
            return true
        }
    }
}
function testForWin() {
    if (playerValue > 21) {
        console.warn("Player Bust")
    }
    else if ((playerValue > dealerValue) && (playerValue <= 21)) {
        console.warn("Player Win")
        bank += (bet*2)
    }
    else if (playerValue == dealerValue) {
        console.warn("Push")
        bank += bet
    }
    else if ((playerValue <= 21) && (dealerValue >= 21)) {
        console.warn("Dealer Bust")
        bank += (bet*2)
    }
    else if ((playerValue <= dealerValue) && (dealerValue <= 21)) {
        console.warn("Dealer Win")
    }
    else {
        console.error("testForWin Error")
    }
    balance.innerHTML = "$"+bank+".00"
}
function resetGame() {
    dCard1Style.style.display = "none"
    dCard2Style.style.display = "none"
    dCard3Style.style.display = "none"
    dCard4Style.style.display = "none"
    dCard5Style.style.display = "none"
    dCard6Style.style.display = "none"
    dCard7Style.style.display = "none"
    dCard8Style.style.display = "none"
    dCard9Style.style.display = "none"
    pCard1Style.style.display = "none"
    pCard2Style.style.display = "none"
    pCard3Style.style.display = "none"
    pCard4Style.style.display = "none"
    pCard5Style.style.display = "none"
    pCard6Style.style.display = "none"
    pCard7Style.style.display = "none"
    pCard8Style.style.display = "none"
    pCard9Style.style.display = "none"
    bet = 0
    hitNumber = 0
    dCard1 = 0
    dCard2 = 0
    dCard3 = 0
    dCard4 = 0
    dCard5 = 0
    dCard6 = 0
    dCard7 = 0
    dCard8 = 0
    dCard9 = 0
    pCard1 = 0
    pCard2 = 0
    pCard3 = 0
    pCard4 = 0
    pCard5 = 0
    pCard6 = 0
    pCard7 = 0
    pCard8 = 0
    pCard9 = 0
    dealerValue = 0
    playerValue = 0
    playerHand = []
    dealerHand = []
    incBet.style.display = "flex"
    decBet.style.display = "flex"
    finBet.style.display = "flex"
    betDisplay.innerHTML = "$"+bet+".00"
    document.getElementById("dealer-value").innerHTML = "00"
    document.getElementById("player-value").innerHTML = "00"
    console.warn("Game Reset")
}

function calculatePlayerValue(hand) {
  let total = 0
  let numAces = 0

  for (let i = 0; i < hand.length; i++) {
    const card = hand[i]
    const cardVal = Value(card)
    if (cardVal == 11) {
      numAces++
    }
    total += cardVal;
  }

  // Adjust Ace values if the total exceeds 21
  while (total > 21 && numAces > 0) {
    total -= 10 // Change Ace value from 11 to 1
    numAces--
  }

  playerValue = total
  document.getElementById("player-value").innerHTML = total
  console.log("player's hand : "+playerHand)
}

function calculateDealerValue(hand) {
    let total = 0
    let numAces = 0
  
    for (let i = 0; i < hand.length; i++) {
      const card = hand[i]
      const cardVal = Value(card)
      if (cardVal == 11) {
        numAces++
      }
      total += cardVal;
    }
  
    // Adjust Ace values if the total exceeds 21
    while (total > 21 && numAces > 0) {
      total -= 10 // Change Ace value from 11 to 1
      numAces--
    }
  
    dealerValue = total
    document.getElementById("dealer-value").innerHTML = total
    console.log("dealer's hand : "+dealerHand)
    console.log("dealer total = "+total)
  }



var pCard1Front = document.getElementById("pCard1-front")
var pCard2Front = document.getElementById("pCard2-front")
var pCard3Front = document.getElementById("pCard3-front")
var pCard4Front = document.getElementById("pCard4-front")
var pCard5Front = document.getElementById("pCard5-front")
function changePicture(cardPic) {
    if (cardPic == "AC") {
        if (hitNumber==1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "2C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "3C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "4C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "5C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "6C") {
        if (hitNumber==1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "7C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "8C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "9C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "10C") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "JC") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "QC") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "KC") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }

    // HEARTS //
    else if (cardPic == "AH") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "2H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "3H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "4H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "5H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "6H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "7H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "8H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "9H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "10H") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "JH") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "QH") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "KH") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }

    // DIAMONDS //
    else if (cardPic == "AD") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "2D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "3D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "4D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "5D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "6D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "7D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "8D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "9D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "10D") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "JD") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "QD") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "KD") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }

    // SPADES //
    else if (cardPic == "AS") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "2S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "3S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "4S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/44.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/44.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/44.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/44.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "5S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "6S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "7S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "8S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "9S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "10S") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "JS") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "QS") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
    else if (cardPic == "KS") {
        if (hitNumber == 1) {
        pCard1Front.innerHTML = "<img src=\"images/Blackjack game/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 2) {
        pCard2Front.innerHTML = "<img src=\"images/Blackjack game/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 3) {
        pCard3Front.innerHTML = "<img src=\"images/Blackjack game/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 4) {
        pCard4Front.innerHTML = "<img src=\"images/Blackjack game/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        } else if (hitNumber == 5) {
        pCard5Front.innerHTML = "<img src=\"images/Blackjack game/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        }
    }
}