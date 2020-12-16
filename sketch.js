const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, stone, chain, tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var treeImg, boyImg;

function preload(){
  treeImg = loadImage("tree.png")
  boyImg= loadImage("boy.png")
}

function setup(){
createCanvas(1300, 800);

engine = Engine.create();
world = engine.world;

mango1 = new Mango(995, 350, 50);
mango2 = new Mango(890, 360, 50);
mango3 = new Mango(1100, 320, 50);
mango4 = new Mango(1180, 390, 50);
mango5 = new Mango(1000, 250, 50);
mango6 = new Mango(925, 435, 50);
mango7 = new Mango(1080, 180, 50);
mango8 = new Mango(1140, 250, 50);

ground = new Ground(550, 785, 1500, 35);
stone= new Stone(184, 665, 40);

chain = new Chain(stone.body, {x: 184, y: 665})
Engine.run(engine);
  
}


function draw() {

  background("lightblue");
      
   chain.display();
   drawSprites();
   imageMode(CENTER)
   image(boyImg, 250, 720, 180, 220);
   image(treeImg,1050, 470,490,700);

   detectcollision(stone, mango1);
   detectcollision(stone, mango2);
   detectcollision(stone, mango3);
   detectcollision(stone, mango4);
   detectcollision(stone, mango5);
   detectcollision(stone, mango6);
   detectcollision(stone, mango7);
   detectcollision(stone, mango8);
   mango1.display(); 
   mango2.display(); 
   mango3.display(); 
   mango4.display(); 
   mango5.display();  
   mango6.display();  
   mango7.display();  
   mango8.display();  
  
   stone.display();
   ground.display();  

}
   
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(stone.body, {x:184, y:665})
  chain.attach(stone.body)
}

function detectcollision(lstone, lmango){

mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance<=lmango.radius+lstone.radius){
  console.log("pluck")
  Matter.Body.setStatic(lmango.body ,false)
}
}
