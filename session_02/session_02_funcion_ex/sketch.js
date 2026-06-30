//Lion
function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES); 
}

function draw() {
    // background
    background(211, 219, 223);

    fill(188, 193, 163);
    rect(0, 400, 600, 600);

    frameRate(2);


    cloudWithOffset(random(-300, 300), random(-300, 300));
    cloudWithOffset(0, 0);
    cloudWithOffset(random(-300, 300), random(-300, 300));



    lion();   

    scatterFlowers(25);


    
}

function lion(){
    let circleX = 300;
    let circleY = 300;
    let circleR = 90;
    let circleS = 70;

    // Mane Color 
    noStroke();
    fill(255, 210, 140);

    // Mane
    push();
    translate(circleX, circleY);
    for (let i = 0; i < 4; i++) {
        maneQuarter(circleR, circleS);
        rotate(90); 
    }
    pop();

    // Face
    fill(255, 239, 195);
    circle(circleX, circleY, 150);

    // blush 
    fill(231, 192, 188);
    ellipse(260,315,25, 15);

    fill(231, 192, 188);
    noStroke();
    ellipse(310,315,25, 15);

    // eye
    fill(94, 75, 59);
    ellipse(270,300,25, 30);

    fill(94, 75, 59);
    ellipse(300,300,25, 30);

    // mouth 
    fill(94, 75, 59);
    ellipse(280,330,15, 10);

    // ears
    let earIC = [231, 192, 188];
    let earOC = [255, 239, 195];

    ear(earOC[0], earOC[1], earOC[2], 240, 240, 135, 40);
    ear(earOC[0], earOC[1], earOC[2], 360, 240, 225, 40);

    ear(earIC[0], earIC[1], earIC[2], 240, 240, 135, 20);
    ear(earIC[0], earIC[1], earIC[2], 360, 240, 225, 20); 

    // body
    fill(255, 239, 195);
    rect(290, 350, 200, 100, 15);

    // feet
    feet(310, 440, 295, 470);
    feet(350, 440, 335, 470);
    feet(410, 440, 395, 470); 
    feet(450, 440, 435, 470);

    tail(480, 370);
}

function maneQuarter(circleR, circleS) {
  let startAngle = -45; 
  let endAngle = 45;
  let step = (endAngle - startAngle) / 2; 

  for (let i = 0; i < 3; i++) {
    let a = startAngle + step * i;
    let x = circleR * cos(a);
    let y = circleR * sin(a);
    circle(x, y, circleS);
  }
}

function ear(R, G, B, x, y, angle, size){
    push(); 
    translate(x, y);
    rotate(angle);          

    fill(R, G, B); 
    arc(0, 0, size, size, 0, 180);
    pop();
}

function feet(x1, y1, x2, y2){
    fill(255, 239, 195);
    rect(x1, y1, 25, 50, 15);

    fill(255, 239, 195);
    rect(x2, y2, 40, 25, 15);
}

function tail(x, y) {
    push();
    translate(x, y);
    noStroke();

    let steps = 50;   // cantidad de círculos que forman la curva
    let len = 90;      // largo total de la cola
    let curveHeight = -35; // qué tan pronunciada es la "S"

    let lastX, lastY;

    for (let i = 0; i <= steps; i++) {
        let t = i / steps;
        let px = len * t;
        let py = -curveHeight * sin(t * 180); // esto genera la forma de S

        fill(255, 239, 195); // mismo color de la melena
        circle(px, py, 15);

        lastX = px;
        lastY = py;
    }

    pop();

    tailTuft(x + lastX, y + lastY)
}

function tailTuft(x, y) {
    push();
    translate(x, y);
    noStroke();
    fill(120, 80, 55); // marrón oscuro, como en la imagen

    let r = 10;     // distancia de cada círculo al centro
    let s = 20;    // tamaño de cada círculo (igual lógica que circleS)

    let startAngle = -60;
    let endAngle = 60;
    let step = (endAngle - startAngle) / 3;

    for (let i = 0; i <= 3; i++) {
        let a = startAngle + step * i;
        let px = r * cos(a);
        let py = r * sin(a);
        circle(px, py, s);
    }

    circle(0, 0, s);

    pop();
}

function flower(x, y, R, G, B){
    let F_circleX = x;
    let F_circleY = y;
    let F_circleR = 15;
    let F_circleS = 15;

    fill(151, 161, 59);
    rect(x - 2, y + 10, 5, 40);

    fill(197, 204, 130);
    ellipse(x - 10, y + 20, 20, 10);

    fill(197, 204, 130);
    ellipse(x + 10, y + 20, 20, 10);

    noStroke();
    fill(R, G, B);

    push();
    translate(F_circleX, F_circleY);
    for (let i = 0; i < 4; i++) {
        maneQuarter(F_circleR, F_circleS);
        rotate(90); 
    }
    pop();

    fill(250, 237, 182);
    circle(F_circleX, F_circleY, 20);
}

function scatterFlowers(amount) {
    let colorOptions = [
        [244, 223, 230], 
        [224, 163, 187], 
        [214, 230, 231] 
    ];

    for (let i = 0; i < amount; i++) {
        let x = random(30, 570);
        let y = random(420, 580);

        let c = random(colorOptions);

        flower(x, y, c[0], c[1], c[2]);
    }
}

function cloud(x, y){
    push();
    translate(x, y);
    noStroke();
    fill(255); 

    ellipse(0, 0, 100, 40);

    ellipse(-30, -15, 50, 40);
    ellipse(0, -25, 60, 50);
    ellipse(30, -15, 55, 40);
    ellipse(55, 0, 45, 30);
    ellipse(-55, 0, 45, 30);

    pop();
}

function cloudWithOffset(offsetX, offsetY) {
    let cx = mouseX + offsetX;
    let cy = constrain(mouseY + offsetY, 0, 370);
    cloud(cx, cy);
}