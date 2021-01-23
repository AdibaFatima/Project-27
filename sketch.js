
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(220, 550, 25);
	b2 = new Bob(280, 550, 25);
	b3 = new Bob(340, 550, 25);
	b4 = new Bob(400, 550, 25);
	b5 = new Bob(460, 550, 25);

	roof = new Roof(380, 200, 600, 30);

	chain1 =new Chain(b1.body, {x:220,y:215});
	chain2 =new Chain(b2.body, {x:280,y:215});
	chain3 =new Chain(b3.body, {x:340,y:215});
	chain4 =new Chain(b4.body, {x:400,y:215});
	chain5 =new Chain(b5.body, {x:460,y:215});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(b1.body, {x: mouseX, y: mouseY});
}

