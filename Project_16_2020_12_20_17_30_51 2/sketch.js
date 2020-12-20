
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var ground, bananaGroup, backgroundImage, groundImage;
var survivalTime = 0;

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  backgroundImage = loadImage("amazonrainforest.jpg");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("Grass-PNG-File.png");
 
}



function setup() {
  createCanvas(600, 370);
  background = createSprite(0,0,800,600);
  background.addImage(backgroundImage);
  background.scale = 1.8;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 300) {
    ground.x = ground.width/2;
  }
  
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 500, 48);
  
  stroke("brown");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 20, 50);
  
}

function food() {
  if(frameCount%80===0) {
    banana = createSprite(400);
    banana.y = Math.round(random(350,250));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-7;
    banana.lifetime=200;
    foodGroup.add(banana);
  }
  
}

function obstacles() { 
  if(frameCount%300===0)
  {
    obstacle = createSprite(400,322);             
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-7;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}






