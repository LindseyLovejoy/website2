btn = document.querySelector('.rules-btn')
closeBtn = document.querySelector('.close-btn')
rules = document.querySelector('.rules')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

score = 0

brickRowCount = 9
brickColumnCount = 5

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

// create brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visable: true
}

// create bricks
bricks = []
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = []
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
    bricks[i][j] = {x, y, ...brickInfo}
  }
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

    // draw score on canvas
    function drawScore() {
        ctx.font = '20px Arial'
        ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
    }

    // Draw bricks on canvas
    function drawBricks()
    {
        bricks.forEach(column => {
            column.forEach(brick => {
                ctx.beginPath()
                ctx.rect(brick.x, brick.y, brick.w, brick.h)
                ctx.fillstyle = '#0095dd'
                ctx.fill()
                ctx.closePath()
            })
        })
    }

    // Draw everything
    function draw() {
        drawBall()
        drawPaddle()
        drawScore()
        drawBricks()
    }

    draw()

//rules open & close event handelers
btn.addEventListener('click', () => {
    rules.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})