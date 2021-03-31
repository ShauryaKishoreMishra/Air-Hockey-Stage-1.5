var striker,strikerImg,computer,goal1,goal2,center,edge1,edge2,edge3,edge4,gameOver;
var playerscore=0;
var compscore=0;

 var gamestate="serve";
 function preload(){
  strikerImg=loadImage("ball.png");
  
 }
function setup(){
  createCanvas(600,600);
  edges = createEdgeSprites();

   edge1= createSprite(10,200,5,1200);
  edge1.shapeColor="white";
   edge2= createSprite(590,200,5,1200);
  edge2.shapeColor="white";
   edge3= createSprite(200,10,1200,5);
  edge3.shapeColor="white";
   edge4= createSprite(200,590,1200,5);
  edge4.shapeColor="white";
   goal1= createSprite(300,585,130,5);
  goal1.shapeColor="red";
   goal2= createSprite(300,15,130,5);
  goal2.shapeColor="red";
   striker= createSprite(300,300,18,18);
  striker.shapeColor="orange";
  striker.scale=0.05;
 
   player= createSprite(300,570,50,5);
  player.shapeColor="cyan";
   computer= createSprite(300,30,50,5);
  computer.shapeColor="cyan";
   center= createSprite(300,300,600,5)
  rectMode="CENTER";
  center.shapeColor="white";
  
   
 
}
function draw(){
  background("blue");
   drawSprites();
   textSize(18);
   fill("cyan")
   text(compscore,150,270);
   text(playerscore,150,350);

   if(gamestate=== "serve"){
     textSize(18);
    fill("cyan");
    text("- - PRESS SPACE TO SERVE - -",190,290);
   
  }
  

striker.addImage(strikerImg);

striker.bounceOff(edge1);
striker.bounceOff(edge2);
striker.bounceOff(edge3);
striker.bounceOff(edge4);
striker.bounceOff(player);
striker.bounceOff(computer);
striker.bounceOff(edges[0]);
striker.bounceOff(edges[1]);
striker.bounceOff(edges[2]);
striker.bounceOff(edges[3]);

computer.bounceOff(edge1);
computer.bounceOff(edge2);

player.bounceOff(edge1);
player.bounceOff(edge2);


computer.x=striker.x;

   if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+9;
  }
  else if(keyIsDown(LEFT_ARROW)){
   player.x=player.x-9;
  }
  
  if(keyIsDown(32)&& gamestate === "serve"){
    serve();
    gamestate="play";

}
if(striker.isTouching(goal1)){
  reset();
  compscore=compscore+1;
  gamestate= "serve";
}
if(striker.isTouching(goal2)){
  reset();
  playerscore=playerscore+1;
  gamestate= "serve";
}

if(playerscore=== 5 || compscore===1){
  gamestate="over";
  textSize(25);
  textFont("calibri")
  text("GAME OVER!",200,280);
  text("Press R to restart",200,180);
 
 
}
}
function reset(){
 striker.x=300;
  striker.y=300;
  striker.velocityX=0;
  striker.velocityY=0;
  player.velocityX=0;
  player.velocityY=0;
  player.x=300;
  player.y=570;
}
function serve(){
  
  striker.velocityX=8;
  striker.velocityY=8;
  computer.x=striker.x;
  
 
}