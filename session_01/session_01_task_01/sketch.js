let canvasX = 400;
let canvasY = 400;
 
function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background(111,77,56);
    strokeWeight(5);
    noStroke();

    // face
    fill(230, 207, 188);
    circle(200,150,380);

    // blush 
    fill(231, 192, 188);
    ellipse((canvasX/2)+30,185,25, 10);

    fill(231, 192, 188);
    noStroke();
    ellipse((canvasX/2)-30,185,25, 10);


    fill(217, 126, 138);
    ellipse((canvasX/2)+50,200,35, 15);

    fill(217, 126, 138);
    ellipse((canvasX/2)-50,200,35, 15);

    fill(231, 192, 188);
    noStroke();
    ellipse((canvasX/2)-30,185,25, 10);

    // eye
    fill(0);
    ellipse((canvasX/2)-25,170,25, 30);

    fill(0);
    ellipse((canvasX/2)+25,170,25, 30);

    // mouth 
    fill(0);
    ellipse((canvasX/2),220,15, 10);

    fill(231, 192, 188);
    ellipse((canvasX/2),220,16, 11);

    // hair
    fill(111,77,56);
    circle((canvasX/2)-120,25,250);

    fill(111,77,56);
    circle((canvasX/2)+120,25,250);

    fill(111,77,56);
    square(313, 50, 100);

    fill(111,77,56);
    square(-13, 50, 100);

}
