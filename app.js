document.addEventListener('DOMContentLoaded', () => {

//card options 

 const cardArray = [
     {
         name: 'Batman',
         img: 'images/Batman.png'
     },
     {
        name: 'Batman',
        img: 'images/Batman.png'
     },
    {
        name: 'Captain-America',
        img: 'images/Captain-America.png'
    },
    {
        name: 'Captain-America',
        img: 'images/Captain-America.png'
    },
    {
        name: 'Deadpool',
        img: 'images/Deadpool.png'
    },
    {
        name: 'Deadpool',
        img: 'images/Deadpool.png'
    },
    {
        name: 'Ironman',
        img: 'images/Ironman.png'
    },
    {
        name: 'Ironman',
        img: 'images/Ironman.png'
    },
    {
        name: 'Locky',
        img: 'images/Locky.png'
    },
    {
        name: 'Locky',
        img: 'images/Locky.png'
    },
    {
        name: 'Superman',
        img: 'images/Superman.png'
    },
    {
        name: 'Superman',
        img: 'images/Superman.png'
    }
  ]


 cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#Result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

 //create your board

 function createBoard() {
     for (let i = 0; i < cardArray.length; i++) {
         var card = document.createElement('img')
         card.setAttribute('src', 'images/Blank.png')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard)
         grid.appendChild(card)
     }
 }

 //check for matches

function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
        console.log("Este es el push" + cardsWon)
    } else {
        cards[optionOneId].setAttribute('src', 'images/Blank.png')
        cards[optionTwoId].setAttribute('src', 'images/Blank.png')
        alert('Sorry, try again')
    }   
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        console.log("texto")
        resultDisplay.textContent = '¡Congratulations, you won!'
    }
}

 //flip your card
 function flipCard() {
     var cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     console.log("texto1" + cardsChosen) 
     cardsChosenId.push(cardId) 
     console.log("texto2" + cardsChosen)  
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500)
     }
 }

 createBoard()
 
})