const wordEL = document.getElementById('word')
wrongLettersEL = document.getElementById('wrongLetters')
const platAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.getElementById('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = ['']
const wrongLetters = ['']


function displayWord() {
    wordEL.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
            </span>
            `).join('')
        }
    `

    const innerWord = wordEL
}

displayWord()