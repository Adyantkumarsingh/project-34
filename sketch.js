var dog,happydog;
var database;
var food,foodstack;

function preload()
{
  dog = loadImage('dogImg.png');
  doghappy = loadImage('dogImg1.png');
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(300,350,10,10);

  foodstack = database.ref('food');
  foodstack.on("value",readStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogHappy);
  }

  Text("Press up arrow key to feed tommy Milk",100,100);
  textSize(150);
  Fill(0);
  Stroke(255,0,0);




  drawSprites();
  //add styles here

}

  function readStock(data){
    foods = data.val();
  }

  function writeStock(x){

    if(x<= 0){
      x = 0;
    }else{
      x = x-1;
    }
    databasee.ref('/').update({
      food:x
    })
  }


