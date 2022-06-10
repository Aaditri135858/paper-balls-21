
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,radius = 40;
var ground_obj,leftSide,rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	   }
    ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);


	ground_obj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
   
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,radius,radius);

  ground_obj.display()
  leftSide.display()
  rightSide.display()
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}




