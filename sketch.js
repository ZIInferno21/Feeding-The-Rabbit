var garden,rabbit;
var gardenImg,rabbitImg,greenleafimage,redleafimage,orangeleafimage;
var greenleaf,redleaf,orangeleaf;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  greenleafimage = loadImage("leaf.png");
  orangeleafimage = loadImage("orangeLeaf.png");
  redleafimage = loadImage("RedImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}


function draw() {
  background(0);
  var ran = Math.round(random(1,3))

  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

 
  rabbit.x = mouseX;
  if (frameCount%70==0){
    if(ran==1){
      leaf();
    }
    if(ran==2){
      orangeeleaf();
    }
    if(ran==3){
      reddleaf();
    }
  }
  drawSprites();
}

function leaf(){
  greenleaf = createSprite(random(1,399),10,20,20);
  greenleaf.addImage(greenleafimage);
  greenleaf.velocityY = +4;
  greenleaf.scale = 0.1;
}

function orangeeleaf(){
  orangeleaf = createSprite(random(1,399),10,20,20);
  orangeleaf.addImage(orangeleafimage);
  orangeleaf.velocityY = +4;
  orangeleaf.scale = 0.1;

}

function reddleaf(){
  redleaf = createSprite(random(1,399),10,20,20);
  redleaf.addImage(redleafimage);
  redleaf.velocityY = +4;
  redleaf.scale = 0.1;
}
