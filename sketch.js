
var car , car_moving , car_broken
var obstaclesGroup , obstacle1 , obstacle2, obstacle3
var ground , invisibleground , groundImage
var gameOver, restart
var score = 0
var backgroundAnimation
var bottomEdge;


function preload(){
    backgroundAnimation = loadImage("background.png")
    
    car_moving = loadAnimation("car.png")
car_broken = loadAnimation("broken car.png")

groundImage = loadImage("road.png")

obstacle1 = loadImage("obstacle 1.png")
obstacle2 = loadImage("obstacle 2.png")
obstacle3 = loadImage("obstacle3.png")

gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");

  
}

function setup() {
 
    createCanvas(700,500);

   
    ground = createSprite(width/2,height-20,width,2);
  ground.addImage("ground",groundImage);
ground.scale=1.5
//ground.visible = true
bottomEdge=createSprite(350,530,700,1)
bottomEdge.visible=false
bottomEdge.shapeColor="green"
//bottomEdge.debug=true

//invisibleGround = createSprite(width/2,height-5,width,125); 
//crainvisibleground.visible=false 
 
//invisibleground.debug = true
  
    car = createSprite(70,30,60,80);
    car.addAnimation("moving" , car_moving)
    car.addAnimation("broken" , car_broken)
    car.setCollider('circle',0,0,100)
    car.scale = 0.9
    //car.debug=true
   
  
  

  obstaclesGroup = new Group()

 
  

}

function draw() {
 
  background(backgroundAnimation)
  if (ground.x < 0){
    ground.x = ground.width/2
  
    
  }
   //ground.x = width/2
  //ground.velocityX = -(8 + 4*score/150);
//ground.debug = true
//nvisibleground.debug = true
  ground.velocityX = -5 
 
  if(( keyDown("SPACE")) && car.y  >= height-100) {
  
    car.velocityY = -20;
     touches = [];
       
  }
  
  if(car.y  <= height-210) {
    car.velocityY=5

  }
  //if(touches.length>0 || keyDown("SPACE")) {      
  
   // touches = []

    
    
  //}


  
  

  spawnObstacles()
  car.collide(bottomEdge)
 
  drawSprites()
 
}

function spawnObstacles(){
  if(frameCount % 40 === 0) {
   var obstacle = createSprite(300,height-95,20,30)
   obstacle.setCollider('circle',0,0,45)
   obstacle.velocityX = -(6 + 3*score/100);
    obstacle.scale = 0.5
    obstaclesGroup.add(obstacle)
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }
  }
 
  
}
