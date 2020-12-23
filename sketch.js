
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(100,300);
	ground1=new Ground(5,390,8000,15)
	log1=new Log(852,379,20,100);
	log2=new Log(994,380,20,100)
	log3=new Log(865,382,20,100)

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX+","+mouseY,mouseX,mouseY)
  paper1.display();
  ground1.display();
  log1.display();
  log2.display();
  log3.display()

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
}
}



