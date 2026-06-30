let circleCount = 20;
let canvasWidth = 400;
let canvasHeight = 400;

let spacing = canvasHeight / circleCount;
let offset = spacing * 0.5;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    angleMode(DEGREES);
    
    frameRate(2);
    fill('green');
    noStroke();

}

function draw() {
    background(220);

    for(let i = 0; i < circleCount; i++){
        for(let j = 0; j < circleCount; j++){
            drawTriangle(i*spacing + offset, j*spacing + offset);
        }
    }
}

function drawTriangle(centerX, centerY){
    push();
    translate(centerX, centerY);
    let rotation = random([0, 90, 180, 270])
    rotate(rotation);
    triangle(10, 10, -10, -10, -10, 10);
    pop();
}