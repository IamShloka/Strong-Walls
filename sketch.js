var deformation;
var car;
var wall;
var thickness;
var speed,weight;
function setup() {  
  createCanvas(1100,400);
  thickness=random(50,70)
  speed=30;
  weight=random(400,1500)
  car = createSprite(50,200,60,40)
  car.shapeColor="white"
  car.velocityX= speed;
  wall = createSprite(950,200,thickness,height/2)
  wall.setCollider("rectangle",70,0,200,height/2)
  wall.true;
  deformation=0.5*speed*speed*weight/22500;
  console.log(deformation)
}

function draw() {
  background("black");  
  
  if(car.collide(wall)){
  car.velocityX=0;
  
  if(thickness<=50){
    wall.shapeColor="red"
     }else if(thickness>=50 && thickness<=60){
     wall.shapeColor="yellow"
     }else if(thickness>=60 && thickness<=70){
     wall.shapeColor="green"
     }
  }
  

  
  drawSprites();
 
}