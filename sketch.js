var bg, bgImg;
var robber, robberImg;
var notes, notesImg;
var robber_ani, robbing_ri;

function preload(){
bgImg = loadImage("assets/bg.jpg");
robberImg = loadImage("assets/bob.png");
notesImg = loadImage("assets/notes.png");
robber_ani = loadAnimation("assets/l1.png", "assets/l2.png", "assets/l3.png", "assets/l4.png")
robbing_ri = loadAnimation("assets/r1.png", "assets/r2.png", "assets/r3.png", "assets/r4.png")
}


function setup(){
createCanvas(1300, 650);
bg = createSprite(600, 400);
bg.addImage(bgImg);
bg.scale = 0.9;

robber = createSprite(100, 225);
robber.addAnimation("robbering",robber_ani);
robber.scale = 0.35

notes = createSprite(400, 145);
notes.addImage(notesImg);


}

function draw(){
background("white");
  if(keyDown(LEFT_ARROW)){
     robber.addAnimation("running", robber_ani);
     robber.x = robber.x-4;
     
  }

  if(keyDown(RIGHT_ARROW)){
    
     robber.x = robber.x+4;
     robber.changeAnimation("flying", robbing_ri);
  }

  if(keyDown(UP_ARROW)){
     robber.y = robber.y-4;
  }

  if(keyDown(DOWN_ARROW)){
     robber.y = robber.y+4;
  }
drawSprites();
}