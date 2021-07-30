var issImage;
var bckimg, space1Img, space2Img, space3Img, space4Img; 

var iss, spacecraft;
var hasDocked = false;
function preload(){
  issImage = loadImage("Images/iss.png");
  bckimg = loadImage("Images/spacebg.jpg");
  space1Img = loadImage("Images/spacecraft1.png");
  space2Img = loadImage("Images/spacecraft2.png");
  space3Img = loadImage("Images/spacecraft3.png");
  space4Img = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  iss =  createSprite(400, 200, 50, 50);
  iss.addImage("iss" , issImage);
  iss.scale = 0.57;
  
  spacecraft = createSprite(400,300,20,20);
  spacecraft.addImage("space1Img", space1Img);
  spacecraft.scale = 0.12;

}
function draw() {
  background(bckimg);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(space4Img);
      spacecraft.x = spacecraft.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(space2Img);
      spacecraft.x = spacecraft.x + 1;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(space3Img);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 1;
    }
  }
  if(spacecraft.y <= (iss.y+50) && spacecraft.x <= (iss.x-35)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }


  drawSprites();
}