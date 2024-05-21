const wordEL = document.getElementById('word')
const wrongLettersEL = document.getElementById('wrongLetters')
const platAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.quereSelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard', 'cat, 'dog', ]

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