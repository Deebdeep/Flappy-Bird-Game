
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground  = document.querySelector('.ground')

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2
  let isGameOver = false
  let gap = 430
  let score = 0
  let count = 1
  


  function startGame()
  {
    birdBottom -= gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
  }
  
let GametimerId = setInterval(startGame,20)

function control(e)
{
  if(e.keyCode === 38)
  {
    jump()
  }
}

function jump()
{
  if(birdBottom < 500) birdBottom += 50
  bird.style.bottom = birdBottom + 'px'
  console.log(birdBottom)
}
document.addEventListener('keyup',control)

function generateObstacle()
{
  let obstacleLeft = 500
  let randomHeight = Math.random() * 80
  let obstacleBottom = randomHeight
  const obstacle = document.createElement('div')
  const topObstacle = document.createElement('div')
  score += 1
   if(!isGameOver)
    { 
     obstacle.classList.add('obstacle') 
     topObstacle.classList.add('topObstacle') 
     
  }
  gameDisplay.appendChild(obstacle)
  gameDisplay.appendChild(topObstacle)
  obstacle.style.left = obstacleLeft + 'px'
  topObstacle.style.left = obstacleLeft + 'px'
  obstacle.style.bottom = obstacleBottom + 'px'
  topObstacle.style.bottom = obstacleBottom + gap + 'px'


  function moveObstacle()
  {
    
    obstacleLeft -= 2
    obstacle.style.left = obstacleLeft + 'px'
    topObstacle.style.left = obstacleLeft + 'px'
    
     
    if(obstacleLeft === -60)
    {
      clearInterval(timerId)
      gameDisplay.removeChild(obstacle)
      gameDisplay.removeChild(topObstacle)
    }

    if(
      obstacleLeft > 200 && obstacleLeft < 278 && birdLeft === 220 &&
      (birdBottom  < obstacleBottom + 151  || birdBottom > obstacleBottom + gap - 180) || 
      birdBottom === 0)
    {
      gameOver()
      clearInterval(timerId)
    }
  }

  let timerId = setInterval(moveObstacle, 20)
  if(!isGameOver)  setTimeout(generateObstacle, 3000)

}
generateObstacle()


function gameOver()
{
  
  score -= 1
  clearInterval(GametimerId)
  console.log('game over')
  console.log(score)
  isGameOver = true
  document.removeEventListener('keyup', control)
  window.alert('GAME OVER');
  window.alert('SCORE  '+score);
  count += 1
  
  
      
  
}
$(document).ready(function() {
  
  var urls = ['flappy-bird.png', '02.png','03.png'];

  var cout = 1;
  $('.bird').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    $('.bird').css('background-image', 'url("' + urls[cout] + '")');
    cout == urls.length-1 ? cout = 0 : cout++;
  }, 3000);

});


$(document).ready(function() {
  
  var urls = ['fb-game-background.png', 'back022.png'];

  var cout = 1;
  $('.sky').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    $('.sky').css('background-image', 'url("' + urls[cout] + '")');
    cout == urls.length-1 ? cout = 0 : cout++;
  }, 3500);

});



})
