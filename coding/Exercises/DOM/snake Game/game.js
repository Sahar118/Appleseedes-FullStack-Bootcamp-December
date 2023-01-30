import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood, SNAKE_SPEED } from './food.js';
import {outsideGrid} from './grid'
const gameBoard =document.getElementById('game-board');
let lastRenderTime=0
let gameOver =false; 



function main(currentTime){
    if (gameOver){

        if (confirm('you lost. press ok to restart.')){
            window.location = '/'
        }
        return
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render')
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
updateSnake()
updateFood()
checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
