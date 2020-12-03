const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myengine,myworld,body1

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld=myengine.world;
  var features = 
  {
    isStatic : true
  }
  body1=Bodies.rectangle(200,200,50,50,features)
  World.add(myworld,body1)
  console.log(body1)

}

function draw() {
  background("black");  
  Engine.update(myengine)
  rectMode(CENTER)
  rect (body1.position.x,body1.position.y,50,50)
}