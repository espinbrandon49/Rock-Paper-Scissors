const RockPaperScissors = (() => {
  const rock = 'rock'; const paper = 'paper'; const scissors = 'scissors'
  let gameCount = 0; let humanCount = 0; let computerCount = 0
  
  const createPlayers = (() => {
    let computer, human;
    document.querySelector('.rock').addEventListener('click', () => {
      computer = [rock, paper, scissors][Math.floor(Math.random() * 3)]
      human = rock
      round(computer, human)
    })
    document.querySelector('.paper').addEventListener('click', () => {
      computer = [rock, paper, scissors][Math.floor(Math.random() * 3)]
      human = paper
      round(computer, human)
    })
    document.querySelector('.scissors').addEventListener('click', () => {
      computer = [rock, paper, scissors][Math.floor(Math.random() * 3)]
      human = scissors
      round(computer, human)
    })
  })()
  
  const round = (computer, human) => {
    gameCount++
    if (computer == human) {
      gameCount--
      document.querySelector('.roundScore').textContent = gameCount
      document.querySelector('.display').innerHTML += `Human: ${human}, Computer: ${computer}, TIE <br/>`
    } else if (computer == rock && human == paper || computer == paper && human == scissors || computer == scissors && human == rock) {
      humanCount++
      document.querySelector('.roundScore').textContent = gameCount
      document.querySelector('.humanScore').textContent = humanCount
      document.querySelector('.display').innerHTML += `Human: ${human}, Computer: ${computer}, HUMAN WINS <br/>`
    } else {
      computerCount++
      document.querySelector('.roundScore').textContent = gameCount
      document.querySelector('.computerScore').textContent = computerCount
      document.querySelector('.display').innerHTML += `Human: ${human}, Computer: ${computer}, COMPUTER WINS <br/>`
    }
    gameCount == 3 ? gameOver() : console.log(gameCount)
  }
  
  const gameOver = () => {
    document.querySelectorAll('button').forEach(button => button.disabled = true)
    humanCount > computerCount
    ? document.querySelector('.display').innerHTML += '<h3> GAME OVER: Human Wins </h3>'
    : document.querySelector('.display').innerHTML += '<h3>GAME OVER: Computer Wins </h3>'
    setTimeout(() => location.reload(), 2000)
  }
})()

