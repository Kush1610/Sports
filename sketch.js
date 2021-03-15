var canvas;
var music;
var cricket,football,basketball,rugby,cricketImg,footballImg,basketballImg,rugbyImg
var cricket2,football2,basketball2,rugby2,cricket2Img,football2Img,basketball2Img,rugby2Img
var ground,groundImg,back,backImg

function preload(){
    music = loadSound("music.mp3");
    cricketImg = loadAnimation("cricket.png");
    footballImg = loadAnimation("football.png");
    basketballImg = loadAnimation("basketball.png");
    rugbyImg = loadAnimation("rugby.png");
    cricket2Img = loadImage("cricket2.png");
    football2Img = loadImage("football2.png");
    basketball2Img = loadImage("basketball2.jpg");
    rugby2Img = loadImage("rugby2.png");
    groundImg = loadImage("groundfootball.png")
    circleImg= loadAnimation("circle.png");
}


function setup(){
    canvas = createCanvas(800,600);

    ground=createSprite(400,300,200,200);
    ground.addImage("ground",groundImg);
    ground.scale=1.3;

    surface1=createSprite(100,570,150,40);
    surface1.scale=1.3;

    surface2=createSprite(300,570,150,40);
    surface2.scale=1.3;

    surface3=createSprite(500,570,150,40);
    surface3.scale=1.3;
    
    surface4=createSprite(700,570,150,40);
    surface4.scale=1.3;

    cricket2=createSprite(100,570,200,200);
    cricket2.addImage("ground",cricket2Img);
    cricket2.scale=0.3;
    //cricket2.debug=true

    football2=createSprite(300,570,200,200);
    football2.addImage("ground",football2Img);
    football2.scale=0.2;
    //football2.debug=true

    basketball2=createSprite(500,570,200,200);
    basketball2.addImage("ground",basketball2Img);
    basketball2.scale=0.3;
    //basketball2.debug=true

    rugby2=createSprite(700,570,200,200);
    rugby2.addImage("ground",rugby2Img);
    rugby2.scale=0.15;
    //rugby2.debug=true

    circle=createSprite(random(20,750));
    circle.y=40
    circle.addAnimation("circle",circleImg);
    circle.addAnimation("cricket",cricketImg);
    circle.addAnimation("football",footballImg);
    circle.addAnimation("basketball",basketballImg);
    circle.addAnimation("rugby",rugbyImg);
    circle.scale=0.15;
    circle.velocityY = 5;
    circle.velocityX = -3;
    circle.visible=false
}

function draw() {
    background(rgb(169,169,169));
    circle.visible=true

if((circle.y + cricket2.y>1074)&&(circle.x + cricket2.x>100)&&(circle.x + cricket2.x<298))
{
    circle.velocityY = circle.velocityY * (-1);
    circle.changeAnimation("cricket",cricketImg)
    circle.scale=0.03
    music.stop()
}

if((circle.y + cricket2.y>1074)&&(circle.x + football2.x>500)&&(circle.x + football2.x<691))
{
    circle.velocityY=0
    circle.velocityX=0
    circle.changeAnimation("football",footballImg)
    circle.scale=0.1
    music.stop()
}

if((circle.y + cricket2.y>1074)&&(circle.x + basketball2.x>923)&&(circle.x + basketball2.x<1093))
{
    circle.velocityY = circle.velocityY * (-1);
    circle.velocityX = circle.velocityX * (1);
    circle.changeAnimation("basketball",basketballImg)
    circle.scale=0.14
    music.stop()
}

if((circle.y + cricket2.y>1074)&&(circle.x + rugby2.x>1298)&&(circle.x + rugby2.x<1499))
{
    circle.velocityY = circle.velocityY * (-1);
    circle.changeAnimation("rugby",rugbyImg)
    circle.scale=0.14
    music.stop()
}

if(circle.y<0)
{
    circle.velocityY = circle.velocityY * (-1);
}

if(circle.x<0)
{
    circle.velocityY = circle.velocityY * (1);
    circle.velocityX = circle.velocityX * (-1)
}

if(circle.x>800)
{
    circle.velocityY = circle.velocityY * (1);
    circle.velocityX = circle.velocityX * (-1);
}
drawSprites()
 

}
