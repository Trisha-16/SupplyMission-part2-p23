var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var right,down,left;
var rBody,dBody,lBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup(){
	createCanvas(800, 700);
	rectMode(CENTER);
	
	right= createSprite(456,590,25,115);
	right.shapeColor= "red";

	down= createSprite(363,650,210,25);
	down.shapeColor= "red";

	left= createSprite(270,590,25,115);
	left.shapeColor= "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rBody = Bodies.rectangle(456,590,25,115,{isStatic:true});
	World.add(world, rBody);

	dBody = Bodies.rectangle(363,650,210,70,{isStatic:true});
	World.add(world, dBody);

	lBody = Bodies.rectangle(270,590,25,115,{isStatic:true});
	World.add(world, lBody);

	Engine.run(engine);
}


function draw(){
  rectMode(CENTER);
  background(153,204,255);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }

  else if(keyCode === RIGHT_ARROW) {
	helicopterSprite.x+=100;
	Matter.Body.translate(packageBody,{x:100, y:0});
  } 
  else if(keyCode === LEFT_ARROW) {
	helicopterSprite.x-=100;
	Matter.Body.translate(packageBody,{x:-100, y:0});
  }


}