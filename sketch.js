var plane,planeimg;
var edge1,edge2;
var meteor,meteorimg,meteorGroup;
var bullet,bulletgrp;
function preload(){
  planeimg=loadImage('aircraft project (1).jpg')
  meteorimg=loadImage('meteor image.jpg')
}
function setup() {
  createCanvas(800,400);
  plane= createSprite(400, 330, 50, 50);
plane.addImage(planeimg)
plane.scale=0.5
  edge1= createSprite(830, 350, 50, 50);
  edge2= createSprite(-30, 350, 50, 50);
  
    
meteorGroup=new Group();
bulletGrp=new Group();
}

function draw() {
  background(0);  
  drawSprites();
 plane.collide(edge1)
 plane.collide(edge2)

  if(keyDown("right")){
    plane.velocityX=6;
  }
  if(keyDown("left")){
    plane.velocityX=-6;
  }
  if(keyWentDown("up")){
    spawnbullet();
    plane.velocityX=0
  }
  
  spawnmeteor();
}
function spawnbullet(){
  bullet=createSprite(plane.x,plane.y,20,20);
  bullet.velocityY=-4;
 
  if(bullet.isTouching(meteorGroup)){
    meteorGroup.destroyEach();
  
  bulletGrp.add(bullet);
  if(bullet.isTouching(meteorGroup)){
    meteorGroup.destroyEach();
  }
  
}
}
function spawnmeteor(){
if(frameCount%120===0){


  meteor= createSprite(400, 30, 50, 50);
  meteor.addImage(meteorimg)
  meteor.scale=0.3
  meteor.x=Math.round(random(750,350))
  meteor.velocityY=3;
  
  meteorGroup.add(meteor)
}

}



