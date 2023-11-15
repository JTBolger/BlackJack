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

var hitNumber = 0
var dealerValue = 0
var playerValue = 0
function drawCard(dealingCard) {
    if (dealingCard == 1) {
        dCard1.style.display = "block"
        dCard1 = randomCard(deck)
        console.log("dCard1 = "+dCard1)
        document.getElementById("dCard1-front").innerHTML = dCard1
        calculateDealerValue(pCard1)
        document.getElementById("dealer-value").innerHTML = Value(dCard1)
        changePicture(dCard1)
        hitNumber = 10
    }
    else if (dealingCard == 2) {
        dCard2.style.display = "block"
        dCard2 = randomCard(deck)
        console.log("dCard2 = "+dCard2)
        document.getElementById("dCard2-front").innerHTML = "<img src=\"images/Blackjack game/1.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        calculateDealerValue(pCard2)
        document.getElementById("dealer-value").innerHTML = Value(dCard1)
        hitNumber = 11
    }
    else if (dealingCard == 3) {
        dCard3.style.display = "block"
        dCard3 = randomCard(deck)
        console.log("dCard3 = "+dCard3)
        document.getElementById("dCard3-front").innerHTML = dCard3
        calculateDealerValue(pCard3)
        changePicture(dCard3)
        hitNumber = 12
    }
    else if (dealingCard == 4) {
        dCard4.style.display = "block"
        dCard4 = randomCard(deck)
        console.log("dCard4 = "+dCard4)
        document.getElementById("dCard4-front").innerHTML = dCard4
        calculateDealerValue(pCard4)
        changePicture(dCard4)
        hitNumber = 13
    }
    else if (dealingCard == 5) {
        dCard5.style.display = "block"
        dCard5 = randomCard(deck)
        console.log("dCard5 = "+dCard5)
        document.getElementById("dCard5-front").innerHTML = dCard5
        calculateDealerValue(pCard5)
        changePicture(dCard5)
        hitNumber = 14
    }
    else if (dealingCard == 6) {
        dCard6.style.display = "block"
        dCard6 = randomCard(deck)
        console.log("dCard6 = "+dCard6)
        document.getElementById("dCard6-front").innerHTML = dCard6
        calculateDealerValue(pCard6)
        changePicture(dCard6)
        hitNumber = 15
    }
    else if (dealingCard == 7) {
        dCard7.style.display = "block"
        dCard7 = randomCard(deck)
        console.log("dCard7 = "+dCard7)
        document.getElementById("dCard7-front").innerHTML = dCard7
        calculateDealerValue(pCard7)
        changePicture(dCard7)
        hitNumber = 16
    }
    else if (dealingCard == 8) {
        dCard8.style.display = "block"
        dCard8 = randomCard(deck)
        console.log("dCard8 = "+dCard8)
        document.getElementById("dCard8-front").innerHTML = dCard8
        calculateDealerValue(pCard8)
        changePicture(dCard8)
        hitNumber = 17
    }
    else if (dealingCard == 9) {
        dCard9.style.display = "block"
        dCard9 = randomCard(deck)
        console.log("dCard9 = "+dCard9)
        document.getElementById("dCard9-front").innerHTML = dCard9
        calculateDealerValue(pCard9)
        changePicture(dCard9)
        hitNumber = 18
    }
    else if (dealingCard == 10) {
        pCard1.style.display = "block"
        pCard1 = randomCard(deck)
        console.log("pCard1 = "+pCard1)
        document.getElementById("pCard1-front").innerHTML = pCard1
        calculatePlayerValue(pCard1)
        hitNumber = 1
        changePicture(pCard1)
    }
    else if (dealingCard == 11) {
        pCard2.style.display = "block"
        pCard2 = randomCard(deck)
        console.log("pCard2 = "+pCard2)
        document.getElementById("pCard2-front").innerHTML = pCard2
        calculatePlayerValue(pCard2)
        hitNumber = 2
        changePicture(pCard2)
    }
    else if (dealingCard == 12) {
        pCard3.style.display = "block"
        pCard3 = randomCard(deck)
        console.log("pCard3 = "+pCard3)
        document.getElementById("pCard3-front").innerHTML = pCard3
        calculatePlayerValue(pCard3)
        hitNumber = 3
        changePicture(pCard3)
    }
    else if (dealingCard == 13) {
        pCard4.style.display = "block"
        pCard4 = randomCard(deck)
        console.log("pCard4 = "+pCard4)
        document.getElementById("pCard4-front").innerHTML = pCard4
        calculatePlayerValue(pCard4)
        hitNumber = 4
        changePicture(pCard4)
    }
    else if (dealingCard == 14) {
        pCard5.style.display = "block"
        pCard5 = randomCard(deck)
        console.log("pCard5 = "+pCard5)
        document.getElementById("pCard5-front").innerHTML = pCard5
        calculatePlayerValue(pCard5)
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
    hitNumber = 12
    console.log("Player is staying on : "+playerValue)
    document.getElementById("dCard2-front").innerHTML = dCard2
    document.getElementById("dealer-value").innerHTML = dealerValue
    setTimeout(dealerHIT, 500)
    setTimeout(dealerHIT, 1000)
    setTimeout(dealerHIT, 1500)
}
function dealerHIT() {
    if ((dealerValue < 17) && (hitNumber == 12)) {
        drawCardThree()
        console.log("dealerValue = "+dealerValue)
    }
    if ((dealerValue < 17) && (hitNumber == 13)) {
        drawCardFour()
        console.log("dealerValue = "+dealerValue)
    }
    if ((dealerValue < 17) && (hitNumber == 14)) {
        drawCardFive()
        console.log("dealerValue = "+dealerValue)
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
            testForWin()
        }
        else {
            return true
        }
    }
}
function testForWin() {}

function calculatePlayerValue() {
    playerValue = 0
    var pCard1_V = 0
    var pCard2_V = 0
    var pCard3_V = 0
    var pCard4_V = 0
    var pCard5_V = 0
    var pCard6_V = 0
    var pCard7_V = 0
    var pCard8_V = 0
    var pCard9_V = 0
    if ((pCard1 == "AH" || pCard1 == "AD" || pCard1 == "AC" || pCard1 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard1_V = 1
            playerValue = pCard1_V
            // console.log("omg..")
        }
        else {
            pCard1_V = 11
            playerValue = pCard1_V
        }
    }
    else {
        pCard1_V = Value(pCard1)
        playerValue = pCard1_V
        
    }
    console.log("pCard1_V = "+pCard1_V)
    if ((pCard2 == "AH" || pCard2 == "AD" || pCard2 == "AC" || pCard2 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard2_V = 1
            playerValue = pCard1_V + pCard2_V
        }
        else {
            pCard2_V = 11
            playerValue = pCard1_V + pCard2_V
        }
    }
    else {
        pCard2_V = Value(pCard2)
        playerValue = pCard1_V + pCard2_V
        console.log("pCard1_V = "+pCard1_V+", pCard2_V = "+pCard2_V)
    }
    if ((pCard3 == "AH" || pCard3 == "AD" || pCard3 == "AC" || pCard3 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard3_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V
        }
        else {
            pCard3_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V
        }
    }
    else if ((hitNumber + 10) >= 12) {
        pCard3_V = Value(pCard3)
        playerValue = pCard1_V + pCard2_V + pCard3_V
        console.log("pCard1_V = "+pCard1_V+", pCard2_V = "+pCard2_V+", pCard3_V = "+pCard3_V)
    }
    if ((pCard4 == "AH" || pCard4 == "AD" || pCard4 == "AC" || pCard4 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard4_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V
        }
        else {
            pCard4_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V
        }
    }
    else if ((hitNumber + 10) >= 13) {
        pCard4_V = Value(pCard4)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V
        console.log("pCard1_V = "+pCard1_V+", pCard2_V = "+pCard2_V+", pCard3_V = "+pCard3_V+", pCard4_V = "+pCard4_V)
    }
    if ((pCard5 == "AH" || pCard5 == "AD" || pCard5 == "AC" || pCard5 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard5_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V
        }
        else {
            pCard5_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V
        }
    }
    else if ((hitNumber + 10) >= 14) {
        pCard5_V = Value(pCard5)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V
        console.log("pCard1_V = "+pCard1_V+", pCard2_V = "+pCard2_V+", pCard3_V = "+pCard3_V+", pCard4_V = "+pCard4_V+", pCard5_V = "+pCard5_V)
    }
    if ((pCard6 == "AH" || pCard6 == "AD" || pCard6 == "AC" || pCard6 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard6_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V
        }
        else {
            pCard6_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V
        }
    }
    else if ((hitNumber + 10) >= 15) {
        pCard6_V = Value(pCard6)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V
    }
    if ((pCard7 == "AH" || pCard7 == "AD" || pCard7 == "AC" || pCard7 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard2_7 = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V
        }
        else {
            pCard2_7 = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V
        }
    }
    else if ((hitNumber + 10) >= 16) {
        pCard7_V = Value(pCard7)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V
    }
    if ((pCard8 == "AH" || pCard8 == "AD" || pCard8 == "AC" || pCard8 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard8_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V
        }
        else {
            pCard8_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V
        }
    }
    else if ((hitNumber + 10) >= 17) {
        pCard8_V = Value(pCard8)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V
    }
    if ((pCard9 == "AH" || pCard9 == "AD" || pCard9 == "AC" || pCard9 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard9_V = 1
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V + pCard9_V
        }
        else {
            pCard9_V = 11
            playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V + pCard9_V
        }
    }
    else if ((hitNumber + 10) >= 18) {
        pCard9_V = Value(pCard9)
        playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V + pCard9_V
    }
    console.log("playerValue = "+playerValue)
    document.getElementById("player-value").innerHTML = playerValue
}

function calculateDealerValue() {
    dealerValue = 0
    var dCard1_V = 0
    var dCard2_V = 0
    var dCard3_V = 0
    var dCard4_V = 0
    var dCard5_V = 0
    var dCard6_V = 0
    var dCard7_V = 0
    var dCard8_V = 0
    var dCard9_V = 0
    if ((dCard1 == "AH" || dCard1 == "AD" || dCard1 == "AC" || dCard1 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard1_V = 1
            dealerValue = dCard1_V
        }
        else {
            dCard1_V = 11
            dealerValue = dCard1_V
        }
    }
    else {
        dCard1_V = Value(dCard1)
        dealerValue = dCard1_V
        
    }
    console.log("dCard1_V = "+dCard1_V)
    if ((dCard2 == "AH" || dCard2 == "AD" || dCard2 == "AC" || dCard2 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard2_V = 1
            dealerValue = dCard1_V + dCard2_V
        }
        else {
            dCard2_V = 11
            dealerValue = dCard1_V + dCard2_V
        }
    }
    else {
        dCard2_V = Value(dCard2)
        dealerValue = dCard1_V + dCard2_V
        console.log("dCard1_V = "+dCard1_V+", dCard2_V = "+dCard2_V)
    }
    if ((dCard3 == "AH" || dCard3 == "AD" || dCard3 == "AC" || dCard3 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard3_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V
        }
        else {
            dCard3_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V
        }
    }
    else if ((hitNumber) >= 12) {
        dCard3_V = Value(dCard3)
        dealerValue = dCard1_V + dCard2_V + dCard3_V
        console.log("dCard1_V = "+dCard1_V+", dCard2_V = "+dCard2_V+", dCard3_V = "+dCard3_V)
    }
    if ((dCard4 == "AH" || dCard4 == "AD" || dCard4 == "AC" || dCard4 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard4_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V
        }
        else {
            dCard4_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V
        }
    }
    else if ((hitNumber) >= 13) {
        dCard4_V = Value(dCard4)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V
        console.log("dCard1_V = "+dCard1_V+", dCard2_V = "+dCard2_V+", dCard3_V = "+dCard3_V+", dCard4_V = "+dCard4_V)
    }
    if ((dCard5 == "AH" || dCard5 == "AD" || dCard5 == "AC" || dCard5 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard5_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V
        }
        else {
            dCard5_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V
        }
    }
    else if ((hitNumber) >= 14) {
        dCard5_V = Value(dCard5)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V
        console.log("dCard1_V = "+dCard1_V+", dCard2_V = "+dCard2_V+", dCard3_V = "+dCard3_V+", dCard4_V = "+dCard4_V+", dCard5_V = "+dCard5_V)
    }
    if ((dCard6 == "AH" || dCard6 == "AD" || dCard6 == "AC" || dCard6 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard6_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V
        }
        else {
            dCard6_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V
        }
    }
    else if ((hitNumber) >= 15) {
        dCard6_V = Value(dCard6)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V
    }
    if ((dCard7 == "AH" || dCard7 == "AD" || dCard7 == "AC" || dCard7 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard2_7 = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V
        }
        else {
            dCard2_7 = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V
        }
    }
    else if ((hitNumber) >= 16) {
        dCard7_V = Value(dCard7)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V
    }
    if ((dCard8 == "AH" || dCard8 == "AD" || dCard8 == "AC" || dCard8 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard8_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V
        }
        else {
            dCard8_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V
        }
    }
    else if ((hitNumber) >= 17) {
        dCard8_V = Value(dCard8)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V
    }
    if ((dCard9 == "AH" || dCard9 == "AD" || dCard9 == "AC" || dCard9 == "AS")) {
        if ((dealerValue + 11) > 21) {
            dCard9_V = 1
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V + dCard9_V
        }
        else {
            dCard9_V = 11
            dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V + dCard9_V
        }
    }
    else if ((hitNumber) >= 18) {
        dCard9_V = Value(dCard9)
        dealerValue = dCard1_V + dCard2_V + dCard3_V + dCard4_V + dCard5_V + dCard6_V + dCard7_V + dCard8_V + dCard9_V
    }
    console.log("dealerValue = "+dealerValue)
    document.getElementById("dealer-value").innerHTML = dealerValue
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