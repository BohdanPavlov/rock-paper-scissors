const round = (player, random, rounds, result, roundNumber) => {
  const round = document.createElement('div')
  round.classList.add('round')
  round.innerHTML = `Round ${roundNumber}, ${player} vs. ${random}, You've ${result}!`
  rounds.append(round)
}

export default round
