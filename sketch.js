
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3
 
function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

paper=new Paper(200,200)

ground=new Ground(800,480,1600,20)
	Engine.run(engine);
  
  dustbin1=new Dustbin(1250,460,300,20)
  dustbin2=new Dustbin(1100,410,20,120)
	dustbin3=new Dustbin(1400,410,20,120)

  


}


function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background(0);

  paper.display()
 ground.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()

 
}


function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85})

}

}
