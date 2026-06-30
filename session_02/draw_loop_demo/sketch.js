let circleCount = 20;
let canvasWidth = 400;
let canvasHeight = 400;

let spacing = canvasHeight / circleCount;
let offset = spacing * 0.5;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    noLoop();
}

function draw() {
    background(220);

    for(let i = 0; i < circleCount; i++){
        for(let j = 0; j < circleCount; j++){
            circle(i*spacing + offset, j*spacing + offset, 20);
        }
    }
}
