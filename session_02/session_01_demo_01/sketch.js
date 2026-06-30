let circleX = 700;
let spacing = 50;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 220);

    circle(circleX, 300, 50);

    circleX = circleX + spacing;
    circle(circleX, 300, 50);

    spacing = spacing * 1.2;
    

    noLoop();

}
