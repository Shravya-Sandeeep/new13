var bg, bgImg;
var robber, robberImg;
var notes, notesImg;
var robber_ani, robbing_ri;

function preload(){
bgImg = loadImage("bg.jpg");
robberImg = loadImage("bob.png");
notesImg = loadImage("notes.png");
robber_ani = loadAnimation("l1.png", "l2.png", "l3.png", "l4.png")
robbing_ri = loadAnimation("r1.png", "r2.png", "r3.png", "r4.png")
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
