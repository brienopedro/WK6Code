let player1 = prompt('Please enter name for Player 1');
let player2 = prompt('Please enter name for Player 2');
let player1Hand = [];
let player2Hand = [];
let player1Score = 0;
let player2Score = 0;
let Ace = 1;
let Jack = 11;
let Queen = 12;
let King = 13;
let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let suits = [' of Spades', ' of Clubs', ' of Diamonds', ' of Hearts'];
let deck = [];



function createDeck () {
    for (let suitsCounter = 0; suitsCounter < 4; suitsCounter++) {
        for (let valuesCounter = 0; valuesCounter < 13; valuesCounter++) {
            deck.push(values[valuesCounter] + suits[suitsCounter]);
        }
    }
    return deck;
}

function shuffleDeck() {
    for(let i = 0; i < 52; i++) {
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

let deckOfCards = createDeck();
let shuffledDeck = shuffleDeck(deckOfCards);
// console.log(deckOfCards);

// Deals 26 cards to each player
for(let i = 0; i < 52; i++){
    let randomCard = deckOfCards.splice(Math.floor(Math.random() * deckOfCards.length), 1);
    if(i % 2 == 0) {
      player1Hand.push(randomCard);
    } else {
      player2Hand.push(randomCard);
    }
}

console.log(player1Hand);
console.log(player2Hand);

// initiates WAR!
for(let i = 0; i < 26; i++) {
  if(player1Hand[i] > player2Hand[i]) {
    player1Score++
    console.log(`${player1} won!`, player1Hand[i] + ' is greater than ' + player2Hand[i]);
  } else if (player2Hand[i] > player1Hand[i]) {
    player2Score++
    console.log(`${player2} won!`, player2Hand[i] + ' is greater than ' + player1Hand[i]);
  } else {
    console.log('Tie!');
  }
}

console.log(`${player1} won` + ' ' + player1Score + ' ' + "rounds!");
console.log(`${player2} won` + ' ' + player2Score + ' ' + "rounds!");

// Announces the winner 
if(player1Score > player2Score) {
  alert(`${player1} wins!`);
} else if (player2Score > player1Score) {
  alert(`${player2} wins!`);
} else {
  alert("It's a tie! Refresh to settle the score once and for all!");
}