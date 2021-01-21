var Boy,BoyImage,treeObjImage,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stone,treeObj
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint=Matter.Constraint;
function preload()
{
BoyImage=loadImage("images/boy.png")
treeObjImage=loadImage("images/tree.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  stone=new Stone(200,380,30)
Boy=createSprite(330,500,200,300)
Boy.addImage(BoyImage)
Boy.scale=0.15

treeObj=new Tree(1050,580);
treeObj.addImage(treeObjImage)
treeObj.scale=0.35
groundObject=new Ground(width/2,600,width,20);



mango1=new Mango(1100,100,30);
mango2=new Mango(1170,130,30);

mango3=new Mango(1010,140,30);
mango4=new Mango(1000,70,30);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,30);
mango7=new Mango(900,230,40);
mango8=new Mango(1140,150,40);
mango9=new Mango(1100,230,40);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);
mango12=new Mango(900,160,40);

launcherObject=new Launch(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
background("grey");
treeObj.display()
  
  Boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  
groundObject.display();
stone.display();
launcherObject.display();
drawSprites()
detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);
detectollision(stone,mango11);
detectollision(stone,mango12);

}
function mouseDragged()
{
Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased()
{
launcherObject.fly();
}
function keyPressed() {
if (keyCode === 32) {
Matter.Body.setPosition(stone.body, {x:235, y:420})
launcherObject.attach(stone.body);
}
}
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,
mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
}

}
 
 




