let context;
let dx = 6;
let dy = 3;
let y = 150;
let x = 10;

function draw() {
    context = canvas.getContext('2d');
    context.clearRect(0, 0, 900, 900);
    context.beginPath();
    context.fillStyle = "red";
    context.arc(x, y, 20, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (x < 2 || x > 900)
        dx = -dx;
    if (y < 2 || y > 900)
        dy = -dy;
    x += dx;
    y += dy;
}
setInterval(draw, 10);