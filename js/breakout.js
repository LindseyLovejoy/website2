btn = document.querySelector('.rules-btn')
closeBtn = document.querySelector('.close-btn')
rules = document.querySelector('.rules')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

//Create ball's properties
ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

// Create paddle properties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,

}

//draw ball on canvas
function drawBall() {
ctx.beginPath()
ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
ctx.fillStyle = `#009599`
ctx.fill()
ctx.closePath()
}

//draw paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = `#009599`
    ctx.fill()
    ctx.closePath()
    }

    // Draw everything
    function draw() {
        drawBall()
        drawPaddle()
    }

    draw()

//rules open & close event handelers
btn.addEventListener('click', () => {
    rules.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})