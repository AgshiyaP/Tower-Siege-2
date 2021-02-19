const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8
var bb9,bb10,bb11,bb12,bb13,bb14
var bb15,bb16,bb17,bb18,bb19,bb20,bb21
var b1,b2,b3,b4,b5,b6,b7,b8,b9
var ball, slingShot
var blockholder1, blockholder2
var img;

function preload(){
    img = loadImage ("polygon.png");
}
function setup(){
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world

    blockholder1 = new BlockHolder (380,300,270,10);
    blockholder2 = new BlockHolder (700,200,200,10);

      //level 1
    bb1 = new Block(280,275,30,40);
    bb2 = new Block(310,275,30,40);
    bb3 = new Block(340,275,30,40);
    bb4 = new Block(370,275,30,40);
    bb5 = new Block(400,275,30,40);
    bb6 = new Block(430,275,30,40);
    bb7 = new Block(460,275,30,40);
    bb8 = new Block(490,275,30,40)
    //level 2
    bb9 = new Block(310,235,30,40);
    bb10 = new Block(340,235,30,40);
    bb11 = new Block(370,235,30,40);
    bb12 = new Block(400,235,30,40);
    bb13 = new Block(430,235,30,40);
    bb14 = new Block(460,235,30,40);
    //level 3
    bb15 = new Block(340,195,30,40);
    bb16 = new Block(370,195,30,40);
    bb17 = new Block(400,195,30,40);
    bb18 = new Block(430,195,30,40);
    //level 4
    bb19 = new Block(370,155,30,40);
    bb20 = new Block(400,155,30,40);
    //level 5
    bb21 = new Block(385,115,30,40);

    //Set 2  
    
    //level 1
    b1 = new Block(640,175,30,40);
    b2 = new Block(670,175,30,40);
    b3 = new Block(700,175,30,40);
    b4 = new Block(730,175,30,40);
    b5 = new Block(760,175,30,40);
    //level 2
    b6 = new Block(670,135,30,40);
    b7 = new Block(700,135,30,40);
    b8 = new Block(730,135,30,40);
    //level 3
    b9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
  
    slingShot = new SlingShot(ball,{x:150,y:150})

Engine.run(engine);  
}
function draw(){
background(56,44,44);
Engine.update(engine);
blockholder1.display();
blockholder2.display();

fill("red")
bb1.display();
bb2.display();
bb3.display();
bb4.display();
bb5.display();
bb6.display();
bb7.display();
bb8.display();
fill("orange")
bb9.display();
bb10.display();
bb11.display();
bb12.display();
bb13.display();
bb14.display();
fill("yellow")
bb15.display();
bb16.display();
bb17.display();
bb18.display();
fill("green")
bb19.display();
bb20.display();
fill("blue")
bb21.display();

fill("cyan")
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
fill("violet")
b6.display();
b7.display();
b8.display();
fill("pink")
b9.display();

fill("black")

slingShot.display();

fill("white");
text("Drag The Line & Release To Hit The Boxes!",500,20);

text("Press Space For A Second Chance!",20,20)

imageMode(CENTER);
image(img,ball.position.x,ball.position.y,40,40);

    


}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed() {
    if (keyCode === 32) {
      slingShot.attach(ball);
    }
  }

