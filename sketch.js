const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var superhero;
var block1, block2, block3, block4, block5, block6;
var monster;
var backgroundImg, platform;

function preload() {
  backgroundImg = loadImage("sprites/sky1.png");
  
}


function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  block1 = new block(700,240,70,70);
  block2 = new block(920,240,70,70);
  block3 = new block(700,320,70,70);
  block4 = new block(920,320,70,70);
  block5 = new block(810,350,70,70);
  block6 = new block(810,160,70,70);

  superhero = new superHero(300,200,100,100);
  monster = new block(400,500,60,60);
}

function draw() {
  background(backgroundImg);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  superhero.display();
  monster.display();


}

