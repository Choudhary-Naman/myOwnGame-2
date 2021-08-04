const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var log,logImage,standingImage;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43,block43,block44,block45,block46,block47,block48,block49,block50,block51,block52,block53,block54,block55,boxImage,treasureImage,treasure;
var treasureKey,keyImage,life,lifeImage,coinImage,coin,speedImage,speed,bombImage,bomb;
var coinCollect,explosion,lifeGone,loose,powerUp,win,backgroundMusic,balloonImage;
function preload() {
   logImage = loadImage("Images/wood2.png");
   standingImage = loadImage("Images/standingLog.png");
   boxImage = loadImage("Images/wood1.png");
   backgroundImage = loadImage("Images/bg.png");
   treasureImage=loadImage("Images/treasures.png");
   keyImage=loadImage("Images/key.png");
   lifeImage=loadImage("Images/life.png");
   coinImage=loadImage("Images/coin.png");
   speedImage=loadImage("Images/speed.png");
   bombImage=loadImage("Images/bombs.png");
   balloonImage=loadImage("Images/balloon.png");

   coinCollect=loadSound("Sounds/coinCollect.mp3");
   explosion=loadSound("Sounds/explosion.mp3");
   lifeGone=loadSound("Sounds/lifeGone.mp3");
   loose=loadSound("Sounds/loose.mp3");
   powerUp=loadSound("Sounds/powerUp.mp3");
   win=loadSound("Sounds/win.mp3");
   backgroundMusic=loadSound("Sounds/backgroundMusic.mp3",true);
}

function setup(){
    var canvas = createCanvas(1300,610);
    engine = Engine.create();
    world = engine.world;

    //backgroundMusic.play();

    block23 = createSprite(650,305,10,70);
    block23.addImage(logImage);
    block23.scale= 0.5;
    block24 = createSprite(650,396,10,70);
    block24.addImage(logImage);
    block24.scale= 0.5;
    block25 = createSprite(595,350,70,10);
    block25.addImage(standingImage);
    block25.scale= 0.5;
    block26 = createSprite(700,350,10,70);
    block26.addImage(standingImage);
    block26.scale= 0.5;

    treasure=createSprite(650,350);
    treasure.addImage(treasureImage);
    treasure.scale= 0.1;

     block1= createSprite(555,350,100,10);
     block1.addImage(standingImage);
     block1.scale= 0.5;
     block2= createSprite(510,304,10,97);
     block2.addImage(logImage);
     block2.scale= 0.5;
     block3= createSprite(725,305,100,10);
     block3.addImage(standingImage);
     block3.scale= 0.5;
     block4= createSprite(725,406,100,10);
     block4.addImage(standingImage);
     block4.scale= 0.5;
     block5=createSprite(670,452,10,100);
     block5.addImage(logImage);
     block5.scale= 0.5;
     block6=createSprite(460,450,100,10);
     block6.addImage(standingImage);
     block6.scale= 0.5;
     block7=createSprite(460,350,170,10);
     block7.addImage(standingImage);
     block7.scale= 0.5;
     block8=createSprite(360,395,100,10);
     block8.addImage(standingImage);
     block8.scale= 0.5;
     block9=createSprite(460,400,10,100);
     block9.addImage(logImage);
     block9.scale= 0.5;
     block10=createSprite(360,400,10,100);
     block10.addImage(logImage);
     block10.scale= 0.5;
     block11=createSprite(324,200,10,100);
     block11.addImage(logImage);
     block11.scale= 0.5;
     block12=createSprite(623,200,10,100);
     block12.addImage(logImage);
     block12.scale= 0.5;
     block13=createSprite(360,300,100,10);
     block13.addImage(standingImage);
     block13.scale= 0.5;
     block14=createSprite(809,200,10,100);
     block14.addImage(logImage);
     block14.scale= 0.5;
     block15=createSprite(390,300,50,10);
     block15.addImage(standingImage);
     block15.scale= 0.5;
     block16=createSprite(180,255,100,10);
     block16.addImage(standingImage);
     block16.scale= 0.5;
     block17=createSprite(224,200,10,180);
     block17.addImage(logImage);
     block17.scale= 0.5;
     block18=createSprite(340,300,10,130);
     block18.addImage(logImage);
     block18.scale= 0.5;
     block19=createSprite(523,200,10,100);
     block19.addImage(logImage);
     block19.scale= 0.5;
     block20=createSprite(180,356,50,10);
     block20.addImage(standingImage);
     block20.scale= 0.5;
     block21=createSprite(425,200,10,100);
     block21.addImage(logImage);
     block21.scale= 0.5;
     block22=createSprite(710,200,10,100);
     block22.addImage(logImage);
     block22.scale= 0.5;
     block27=createSprite(810,200,10,100);
     block27.addImage(logImage);
     block27.scale= 0.5;
     block28=createSprite(910,200,10,100);
     block28.addImage(logImage);
     block28.scale= 0.5;
     block29=createSprite(1010,200,10,100);
     block29.addImage(logImage);
     block29.scale= 0.5;
     block30=createSprite(1110,200,10,100);
     block30.addImage(logImage);
     block30.scale= 0.5;
     block31=createSprite(1160,246,100,10);
     block31.addImage(standingImage);
     block31.scale= 0.5;
     block32=createSprite(1160,346,50,10);
     block32.addImage(standingImage);
     block32.scale= 0.5;
     block32=createSprite(1160,446,50,10);
     block32.addImage(standingImage);
     block32.scale= 0.5;
     block33=createSprite(1160,546,50,10);
     block33.addImage(standingImage);
     block33.scale= 0.5;
     block34=createSprite(180,457,50,10);
     block34.addImage(standingImage);
     block34.scale= 0.5;
     block35=createSprite(180,557,50,10);
     block35.addImage(standingImage);
     block35.scale= 0.5;
     block36=createSprite(1115,600,10,100);
     block36.addImage(logImage);
     block36.scale= 0.5;
     block37=createSprite(1015,600,10,100);
     block37.addImage(logImage);
     block37.scale= 0.5;
     block38=createSprite(915,600,10,100);
     block38.addImage(logImage);
     block38.scale= 0.5;
     block39=createSprite(815,600,10,100);
     block39.addImage(logImage);
     block39.scale= 0.5;
     block40=createSprite(715,600,10,100);
     block40.addImage(logImage);
     block40.scale= 0.5;
     block41=createSprite(615,600,10,100);
     block41.addImage(logImage);
     block41.scale= 0.5;
     block42=createSprite(515,600,10,100);
     block42.addImage(logImage);
     block42.scale= 0.5;
     block43=createSprite(415,600,10,100);
     block43.addImage(logImage);
     block43.scale= 0.5;
     block44=createSprite(315,600,10,100);
     block44.addImage(logImage);
     block44.scale= 0.5;
     block45=createSprite(215,600,10,100);
     block45.addImage(logImage);
     block45.scale= 0.5;
     block46=createSprite(543,340,10,100);
     block46.addImage(logImage);
     block46.scale= 0.5;
     block47=createSprite(615,497,10,100);
     block47.addImage(standingImage);
     block47.scale= 0.5;
     
     

    

    
    treasureKey = createSprite(200,200);
    treasureKey.addImage("key for the treasure",balloonImage);
    treasureKey.scale=0.05
 }

function draw(){
    background(backgroundImage);
    Engine.update(engine);
   
    
//pirates.display();
// block1.display();
// block2.display();
// block3.display();
// block4.display();
// block5.display();
// block6.display();
// block7.display();
// block8.display();
// block9.display();
// block10.display();
// block11.display();
// block12.display();
// block13.display();
// block14.display();
// block15.display();
// block16.display();
// block17.display();
// block18.display();
// block19.display();
// block20.display();
// block21.display();
// block22.display();
// block23.display();
// block24.display();
// block25.display();
// block26.display();
// block27.display();
// block28.display();
// block29.display();
// block30.display();
// block31.display();
// block32.display();
// block33.display();
// block34.display();
// block35.display();
// block36.display();
// block37.display();
//  block38.display();


drawSprites();
}