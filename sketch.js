const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var world,engine;
var ground1,b1,b2,b3,b4,b5,b6,boulder1;
var chain1;

function setup() {
  var canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(400,390,800,10);
  b1=new Block(300,370,50,50);
  b2=new Block(320,370,50,50);
  b3=new Block(340,370,50,50);
  b4=new Block(310,350,50,50);
  b5=new Block(330,350,50,50);
  b6=new Block(320,330,50,50);
  boulder1=new Boulder(100,200);

  chain1=new Chain(boulder1.body,{x: 100,y: 200});
}

function draw() {
  background("blue");
  Engine.update(engine);
  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  boulder1.display();
   chain1.display();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(boulder1.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
 chain1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain1.attach(boulder1.body);
  }
}