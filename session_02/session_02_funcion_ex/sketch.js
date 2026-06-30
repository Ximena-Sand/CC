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

    lion();   

    fill(255, 239, 195);
    rect(280, 350, 200, 100);
    
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

