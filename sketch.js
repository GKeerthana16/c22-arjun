const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;

var myEngine, myWorld
var ball;


function setup() {
  createCanvas(400,400)

  myEngine =Engine.create();
  myWorld= myEngine.world;

  ball = Bodies.circle(200,200,60);
  World.add(myWorld,ball);





}

function draw() {
  background("black");  

  rectMode(CENTER);
  rect(200,200,50,50)

  Engine.update(myEngine);
  circle(ball.position.x, ball.position.y, 60);
}