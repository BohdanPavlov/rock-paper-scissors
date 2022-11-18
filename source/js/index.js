import '../../../scss/main.scss'
import round from './round'
import handleResetButton from './reset'

const WON = 'WON'
const LOST = 'LOST'
let win = 0
let loss = 0
let roundNumber = 1

const gameButtons = document.querySelector('.buttons')
const resetButton = document.querySelector('.button-reset')

const handleButtons = (e) => {
  const options = ['Rock', 'Paper', 'Scissors']
  const rounds = document.querySelector('.rounds')
  const buttons = document.querySelectorAll('.buttons__button')
  const playerChoice = e.target.innerHTML

  switch (playerChoice) {
    case 'Rock':
      options.shift()
      break
    case 'Paper':
      options.splice(1, 1)
      break
    case 'Scissors':
      options.pop()
      break
  }

  const randomValue = Math.floor(Math.random() * options.length)
  const randomChoice = options[randomValue]

  if (playerChoice === 'Rock' && randomChoice === 'Paper') {
    round(playerChoice, randomChoice, rounds, LOST, roundNumber)
    ++loss
    ++roundNumber
  }

  if (playerChoice === 'Rock' && randomChoice === 'Scissors') {
    round(playerChoice, randomChoice, rounds, WON, roundNumber)
    ++win
    ++roundNumber
  }

  if (playerChoice === 'Paper' && randomChoice === 'Rock') {
    round(playerChoice, randomChoice, rounds, WON, roundNumber)
    ++win
    ++roundNumber
  }

  if (playerChoice === 'Paper' && randomChoice === 'Scissors') {
    round(playerChoice, randomChoice, rounds, LOST, roundNumber)
    ++loss
    ++roundNumber
  }

  if (playerChoice === 'Scissors' && randomChoice === 'Paper') {
    round(playerChoice, randomChoice, rounds, WON, roundNumber)
    ++win
    ++roundNumber
  }

  if (playerChoice === 'Scissors' && randomChoice === 'Rock') {
    round(playerChoice, randomChoice, rounds, LOST, roundNumber)
    ++loss
    ++roundNumber
  }

  if (win === 3) {
    alert(`You ${WON}!`)
    buttons.forEach((button) => button.setAttribute('disabled', 'disabled'))
  } else if (loss === 3) {
    alert(`You ${LOST}!:(`)
    buttons.forEach((button) => button.setAttribute('disabled', 'disabled'))
  }
}

gameButtons.addEventListener('click', handleButtons)

resetButton.addEventListener('click', handleResetButton)
