function setup() {
    createCanvas(800, 600);

    greeting();
}

function draw() {
    background(120);

    draw_flower_translate(200, 200);
    draw_flower_translate(300, 300);



}

function greeting() {
    console.log("Hello World!");
}

function draw_flower(centerX, centerY){
    noStroke();
    fill('yellow');
    circle(centerX, centerY, 20);

    fill('lightblue');
    circle(centerX + 30, centerY, 20);
    circle(centerX - 30, centerY, 20);
    circle(centerX, centerY + 30, 20);
    circle(centerX, centerY - 30, 20);   
}


function draw_flower_translate(centerX, centerY){
    push();
    translate(centerX, centerY);
    noStroke();
    fill('yellow');
    circle(0, 0, 20);

    fill('lightblue');
    circle(30, 0, 20);
    circle(-30, 0, 20);
    circle(0, 30, 20);
    circle(0, -30, 20);   
}