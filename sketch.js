
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5, roof1, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,100,600,30);

	bob1 = new bob(400,500,35);
	bob2 = new bob(330,500,35);
	bob3 = new bob(470,500,35);
	bob4 = new bob(260,500,35);
	bob5 = new bob(540,500,35);



	rope1 = new rope (bob1.body, {x:400,y:100});
	rope2 = new rope (bob2.body, {x:330,y:100});
	rope3 = new rope (bob3.body,{x:470,y:100});
	rope4 = new rope (bob4.body, {x:260,y:100});
	rope5 = new rope (bob5.body, {x:540,y:100}); 
	Engine.run(engine);	

  
}


function draw() {
	

	rectMode(CENTER);
	background(0);
	fill ("red");
	text ("mouseX : "+mouseX,200,50);

	text ("mouseY : "+mouseY,350,50);
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display(); 

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	
 

	
	roof1.display();

  
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){

		console.log("works");

		Matter.Body.applyForce(bob4.body, bob4.body.position, {x:-40, y:-40});

	}
}
