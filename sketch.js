var dog ,dog1,dog2;
var foods;
var foods=20
var gameState="PLAY"
var foodStock
var response,responseJSON
var hour,datetime
var bottle1;
function preload()
{
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
  dog3=loadImage("images/milk bottle.jpg")
}

function setup() {
	createCanvas(10000, 10000);
  dog=createSprite(400,300,10,10)
dog.addImage(dog1)
dog.scale=1/2
database=firebase.database()

bottle1=createSprite(100,300)
bottle1.addImage(dog3)
bottle1.scale=1/5
}


function draw() {  
  background("yellow")
  textSize(30)
  text("foods: "+foods,400,500)



  drawSprites();
}
  
 
 async function Hour(){
   response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   responseJSON = await response.json();

   datetime = responseJSON.datetime;
   hour = datetime.slice(11,13);
  
 
 }
