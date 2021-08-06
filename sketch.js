const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var motor;
var world;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  motor = Engine.create();
  world = motor.world;

  box1 = new Box(225,50,50,40);
  box2 = new Box(200,100,50,40);
  ground = new Ground(200,390,400,10);
}

function draw() {
  background(0);
  Engine.update(motor);  
  box1.display();
  box2.display();
  ground.display();

}