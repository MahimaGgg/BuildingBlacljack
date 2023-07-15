
let player = {
    name: "Mahi",
    chips: 136
}
let cards = [] // Array= ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let massage = ""
let massageEl = document.getElementById("massage-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// returning values===>
function getRandomCard(){
     let rendomNumber= Math.floor( Math.random()*13 ) + 1
    if (rendomNumber > 10 ){
        return 10
     } else if(rendomNumber === 1){
        return 11
    } else {
        return rendomNumber
    }
 }






// create a new fun called startGame() that called renderGame()====>
function startGame(){
isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
   let cards = [firstCard,secondCard] // Array= ordered list of items
let sum = firstCard + secondCard
    renderGame()
}





function renderGame() {

    // render out only firstCardand secondCard===>
// cardsEl.textContent = "Cards: "  + firstCard + "  "  +  secondCard


// render out all cards we have====> create a array in top  of ==sum ==>niche only 2 cards 
// cardsEl.textContent = "Cards:  "  + cards[0] + " " + cards[1]
cardsEl.textContent = "Cards:  "  
//use for loop == for all cards
for (let i = 0 ; i < cards.length; i++){
    cardsEl.textContent +=  cards[i] + " "
}



    sumEl.textContent = "Sum: "  +  sum
    if (sum <= 20) {
        massage = "Do you want to draw a new card ? 🙂"
    } else if (sum === 21) {
        massage = "Wohoo! You've got Blackjack!😍"
        hasBlackjack = true
    }
    else {
        massage = "You're out of the game!😣"
        isAlive = false
    }
    massageEl.textContent = massage

}

function  newCard(){
    if(isAlive = true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card 
        
        // push card to cards array
        cards.push(card)
        
        
        console.log (cards)
        renderGame()}
  
}


// Or same this

// else if (sum >21){
//     console.log("You're out of the game!😥")
// }







