function setup() {
    createCanvas(400, 400);

    let answer = 42; // Declared a variable 
    let fav = 8;    // Number data type
    
    console.log(answer + fav); // print out 42
    console.log(answer - fav);
    console.log(answer * fav);
    console.log(answer / fav);

    let fruit1 = 'apple';   // String data type
    let fruit2 = "banana";
    console.log(fruit1 + ' ' + fruit2);

    console.log(`I like ${fruit1}s, but ${fruit2}s, no.`);

    console.log('cat'[1]);

    console.log(answer.toString());

    let determine = 42  == 43;  // The stored value willl be...
    // ... a Boolean date type ...
    // ... with false value
    console.log(determine);

    const name = "Ximena";  // constant value
    // name = "Something" // It's impossible

    let huh;
    console.log(huh);   // undefined...

    let droid = 'BB-8';
    let fromEarth = null;
    console.log(fromEarth);   
}

function draw() {
    background(220, 200, 230);
    circle(200, 200, 50);
}
