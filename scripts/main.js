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
    var tempValue = 0
    if (dealingCard == 1) {
        dCard1.style.display = "block"
        dCard1 = randomCard(deck)
        console.log("dCard1 = "+dCard1)
        document.getElementById("dCard1-front").innerHTML = dCard1
        tempValue = Value(dCard1)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue

    }
    else if (dealingCard == 2) {
        dCard2.style.display = "block"
        dCard2 = randomCard(deck)
        console.log("dCard2 = "+dCard2)
        document.getElementById("dCard2-front").innerHTML = "<img src=\"images/PlayingCardBack.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
        tempValue = Value(dCard2)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        // document.getElementById("dealer-value").innerHTML = "??"
    }
    else if (dealingCard == 3) {
        dCard3.style.display = "block"
        dCard3 = randomCard(deck)
        console.log("dCard3 = "+dCard3)
        document.getElementById("dCard3-front").innerHTML = dCard3
        dCard3.style.display = "block"
        tempValue = Value(dCard3)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 4) {
        dCard4.style.display = "block"
        dCard4 = randomCard(deck)
        console.log("dCard4 = "+dCard4)
        document.getElementById("dCard4-front").innerHTML = dCard4
        tempValue = Value(dCard4)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 5) {
        dCard5.style.display = "block"
        dCard5 = randomCard(deck)
        console.log("dCard5 = "+dCard5)
        document.getElementById("dCard5-front").innerHTML = dCard5
        tempValue = Value(dCard5)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 6) {
        dCard6.style.display = "block"
        dCard6 = randomCard(deck)
        console.log("dCard6 = "+dCard6)
        document.getElementById("dCard6-front").innerHTML = dCard6
        tempValue = Value(dCard6)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 7) {
        dCard7.style.display = "block"
        dCard7 = randomCard(deck)
        console.log("dCard7 = "+dCard7)
        document.getElementById("dCard7-front").innerHTML = dCard7
        tempValue = Value(dCard7)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 8) {
        dCard8.style.display = "block"
        dCard8 = randomCard(deck)
        console.log("dCard8 = "+dCard8)
        document.getElementById("dCard8-front").innerHTML = dCard8
        tempValue = Value(dCard8)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 9) {
        dCard9.style.display = "block"
        dCard9 = randomCard(deck)
        console.log("dCard9 = "+dCard9)
        document.getElementById("dCard9-front").innerHTML = dCard9
        tempValue = Value(dCard9)
        dealerValue = dealerValue + tempValue
        console.log("dealerValue = "+dealerValue)
        document.getElementById("dealer-value").innerHTML = dealerValue
    }
    else if (dealingCard == 10) {
        pCard1.style.display = "block"
        pCard1 = randomCard(deck)
        console.log("pCard1 = "+pCard1)
        document.getElementById("pCard1-front").innerHTML = pCard1
        calculatePlayerValue(pCard1)
        hitNumber = 1
    }
    else if (dealingCard == 11) {
        pCard2.style.display = "block"
        pCard2 = randomCard(deck)
        console.log("pCard2 = "+pCard2)
        document.getElementById("pCard2-front").innerHTML = pCard2
        calculatePlayerValue(pCard2)
        hitNumber = 2
    }
    else if (dealingCard == 12) {
        pCard3.style.display = "block"
        pCard3 = randomCard(deck)
        console.log("pCard3 = "+pCard3)
        document.getElementById("pCard3-front").innerHTML = pCard3
        calculatePlayerValue(pCard3)
        hitNumber = 3
    }
    else if (dealingCard == 13) {
        pCard4.style.display = "block"
        pCard4 = randomCard(deck)
        console.log("pCard4 = "+pCard4)
        document.getElementById("pCard4-front").innerHTML = pCard4
        calculatePlayerValue(pCard4)
        hitNumber = 4
    }
    else if (dealingCard == 14) {
        pCard5.style.display = "block"
        pCard5 = randomCard(deck)
        console.log("pCard5 = "+pCard5)
        document.getElementById("pCard5-front").innerHTML = pCard5
        calculatePlayerValue(pCard5)
        hitNumber = 5
    }
    else if (dealingCard == 15) {
        pCard6.style.display = "block"
        pCard6 = randomCard(deck)
        console.log("pCard6 = "+pCard6)
        document.getElementById("pCard6-front").innerHTML = pCard6
        calculatePlayerValue(pCard6)
        hitNumber = 6
    }
    else if (dealingCard == 16) {
        pCard7.style.display = "block"
        pCard7 = randomCard(deck)
        console.log("pCard7 = "+pCard7)
        document.getElementById("pCard7-front").innerHTML = pCard7
        calculatePlayerValue(pCard7)
        hitNumber = 7
    }
    else if (dealingCard == 17) {
        pCard8.style.display = "block"
        pCard8 = randomCard(deck)
        console.log("pCard8 = "+pCard8)
        document.getElementById("pCard8-front").innerHTML = pCard8
        calculatePlayerValue(pCard8)
        hitNumber = 8
    }
    else if (dealingCard == 18) {
        pCard9.style.display = "block"
        pCard9 = randomCard(deck)
        console.log("pCard9 = "+pCard9)
        document.getElementById("pCard9-front").innerHTML = pCard9
        calculatePlayerValue(pCard9)
        hitNumber = 9
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
    // else if (card == "AC" && (dealerValue < 11 || playerValue < 11)) {
    //     return 11
    // }
    // else if (card == "AC" && (dealerValue >= 11 || playerValue >= 11)) {
    //     return 1
    // }
    // else if (card == "AD" && (dealerValue < 11 || playerValue < 11)) {
    //     return 11
    // }
    // else if (card == "AD" && (dealerValue >= 11 || playerValue >= 11)) {
    //     return 1
    // }
    // else if (card == "AH" && (dealerValue < 11 || playerValue < 11)) {
    //     return 11
    // }
    // else if (card == "AH" && (dealerValue >= 11 || playerValue >= 11)) {
    //     return 1
    // }
    // else if (card == "AS" && (dealerValue < 11 || playerValue < 11)) {
    //     return 11
    // }
    // else if (card == "AS" && (dealerValue >= 11 || playerValue >= 11)) {
    //     return 1
    // }
}

function HIT() {
    if (playerValue < 21) {
        drawCard((hitNumber + 10))
    }
    else {
        console.error("player has busted/reached 21")
    }
}

// function calculatePlayerValue(cardForCalculation) {
//     if ((pCard1 == "AH" || pCard2 == "AH" || pCard3 == "AH" || pCard4 == "AH" || pCard5 == "AH" || pCard6 == "AH" || pCard7 == "AH" || pCard8 == "AH" || pCard9 == "AH" || pCard1 == "AC" || pCard2 == "AC" || pCard3 == "AC" || pCard4 == "AC" || pCard5 == "AC" || pCard6 == "AC" || pCard7 == "AC" || pCard8 == "AC" || pCard9 == "AC" || pCard1 == "AD" || pCard2 == "AD" || pCard3 == "AD" || pCard4 == "AD" || pCard5 == "AD" || pCard6 == "AD" || pCard7 == "AD" || pCard8 == "AD" || pCard9 == "AD" || pCard1 == "AS" || pCard2 == "AS" || pCard3 == "AS" || pCard4 == "AS" || pCard5 == "AS" || pCard6 == "AS" || pCard7 == "AS" || pCard8 == "AS" || pCard9 == "AS") ) {
//         if ((playerValue + Value(cardForCalculation))> 21) {
//             playerValue = playerValue - 9
//         }
//         else {
//             tempValue = Value(cardForCalculation)
//             playerValue = playerValue + tempValue
//             console.log("playerValue = "+playerValue)
//             document.getElementById("player-value").innerHTML = playerValue
//         }
//     }
//     else {
//         tempValue = Value(cardForCalculation)
//         playerValue = playerValue + tempValue
//         console.log("playerValue = "+playerValue)
//         document.getElementById("player-value").innerHTML = playerValue
//     }
// }

var pCard1_V = 0
var pCard2_V = 0
var pCard3_V = 0
var pCard4_V = 0
var pCard5_V = 0
var pCard6_V = 0
var pCard7_V = 0
var pCard8_V = 0
var pCard9_V = 0

var dCard1_V = 0
var dCard2_V = 0
var dCard3_V = 0
var dCard4_V = 0
var dCard5_V = 0
var dCard6_V = 0
var dCard7_V = 0
var dCard8_V = 0
var dCard9_V = 0

function calculatePlayerValue(CFC) {
    tempValue = Value(CFC)
    if ((pCard1 == "AH" || pCard1 == "AD" || pCard1 == "AC" || pCard1 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard2_V = 1
        }
        else {
            pCard2_V = 11
        }
    }
    else {
        pCard1_V = Value(pCard1)
    }
    if ((pCard2 == "AH" || pCard2 == "AD" || pCard2 == "AC" || pCard2 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard2_V = 1
        }
        else {
            pCard2_V = 11
        }
    }
    else if ((hitNumber + 10) == 11) {
        pCard2_V = Value(pCard2)
    }
    if ((pCard3 == "AH" || pCard3 == "AD" || pCard3 == "AC" || pCard3 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard3_V = 1
        }
        else {
            pCard3_V = 11
        }
    }
    else if ((hitNumber + 10) == 12) {
        pCard3_V = Value(pCard3)
    }
    if ((pCard4 == "AH" || pCard4 == "AD" || pCard4 == "AC" || pCard4 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard4_V = 1
        }
        else {
            pCard4_V = 11
        }
    }
    else if ((hitNumber + 10) == 13) {
        pCard4_V = Value(pCard4)
    }
    if ((pCard5 == "AH" || pCard5 == "AD" || pCard5 == "AC" || pCard5 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard5_V = 1
        }
        else {
            pCard5_V = 11
        }
    }
    else if ((hitNumber + 10) == 14) {
        pCard5_V = Value(pCard5)
    }
    if ((pCard6 == "AH" || pCard6 == "AD" || pCard6 == "AC" || pCard6 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard6_V = 1
        }
        else {
            pCard6_V = 11
        }
    }
    else if ((hitNumber + 10) == 15) {
        pCard6_V = Value(pCard6)
    }
    if ((pCard7 == "AH" || pCard7 == "AD" || pCard7 == "AC" || pCard7 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard2_7 = 1
        }
        else {
            pCard2_7 = 11
        }
    }
    else if ((hitNumber + 10) == 16) {
        pCard7_V = Value(pCard7)
    }
    if ((pCard8 == "AH" || pCard8 == "AD" || pCard8 == "AC" || pCard8 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard8_V = 1
        }
        else {
            pCard8_V = 11
        }
    }
    else if ((hitNumber + 10) == 17) {
        pCard8_V = Value(pCard8)
    }
    if ((pCard9 == "AH" || pCard9 == "AD" || pCard9 == "AC" || pCard9 == "AS")) {
        if ((playerValue + 11) > 21) {
            pCard9_V = 1
        }
        else {
            pCard9_V = 11
        }
    }
    else if ((hitNumber + 10) == 18) {
        pCard9_V = Value(pCard9)
    }
    playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V + pCard9_V
    console.log("playerValue = "+playerValue)
    document.getElementById("player-value").innerHTML = playerValue
}

// function calculateDealerValue(CFC) {
//     tempValue = Value(CFC)
//     if ((pCard1 == "AH" || pCard1 == "AD" || pCard1 == "AC" || pCard1 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard2_V = 1
//         }
//         else {
//             pCard2_V = 11
//         }
//     }
//     else {
//         pCard1_V = Value(pCard1)
//     }
//     if ((pCard2 == "AH" || pCard2 == "AD" || pCard2 == "AC" || pCard2 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard2_V = 1
//         }
//         else {
//             pCard2_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 11) {
//         pCard2_V = Value(pCard2)
//     }
//     if ((pCard3 == "AH" || pCard3 == "AD" || pCard3 == "AC" || pCard3 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard3_V = 1
//         }
//         else {
//             pCard3_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 12) {
//         pCard3_V = Value(pCard3)
//     }
//     if ((pCard4 == "AH" || pCard4 == "AD" || pCard4 == "AC" || pCard4 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard4_V = 1
//         }
//         else {
//             pCard4_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 13) {
//         pCard4_V = Value(pCard4)
//     }
//     if ((pCard5 == "AH" || pCard5 == "AD" || pCard5 == "AC" || pCard5 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard5_V = 1
//         }
//         else {
//             pCard5_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 14) {
//         pCard5_V = Value(pCard5)
//     }
//     if ((pCard6 == "AH" || pCard6 == "AD" || pCard6 == "AC" || pCard6 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard6_V = 1
//         }
//         else {
//             pCard6_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 15) {
//         pCard6_V = Value(pCard6)
//     }
//     if ((pCard7 == "AH" || pCard7 == "AD" || pCard7 == "AC" || pCard7 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard2_7 = 1
//         }
//         else {
//             pCard2_7 = 11
//         }
//     }
//     else if ((hitNumber + 10) == 16) {
//         pCard7_V = Value(pCard7)
//     }
//     if ((pCard8 == "AH" || pCard8 == "AD" || pCard8 == "AC" || pCard8 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard8_V = 1
//         }
//         else {
//             pCard8_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 17) {
//         pCard8_V = Value(pCard8)
//     }
//     if ((pCard9 == "AH" || pCard9 == "AD" || pCard9 == "AC" || pCard9 == "AS")) {
//         if ((playerValue + 11) > 21) {
//             pCard9_V = 1
//         }
//         else {
//             pCard9_V = 11
//         }
//     }
//     else if ((hitNumber + 10) == 18) {
//         pCard9_V = Value(pCard9)
//     }
//     playerValue = pCard1_V + pCard2_V + pCard3_V + pCard4_V + pCard5_V + pCard6_V + pCard7_V + pCard8_V + pCard9_V
//     console.log("playerValue = "+playerValue)
//     document.getElementById("player-value").innerHTML = playerValue
// }