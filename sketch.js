var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("DRAGONTRESURE.jpg")
  //load image for the treasure background
  bg2= loadImage("DEAF.jpg")

}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background


  if(score === 3) {
    clear()
    background(bg2)
    fill("GOLD")
    textSize(40);
    text("GOOD JOB U SOLVED ALL 3 RIDDLES",150, 200);
  }

  drawSprites()
}