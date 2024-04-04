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

//draw ball on canvas
function drawBall() {
ctx.beginPath()
ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
ctx.fillStyle = `#009599`
ctx.fill()
ctx.stroke()
}

drawBall()


//rules open & close event handelers
btn.addEventListener('click', () => {
    rules.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})