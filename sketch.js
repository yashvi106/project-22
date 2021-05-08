var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyimg1.png","images/fairyImage2.png")
	fairySound = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    
	//create fairy sprite and add animation for fairy
fairy= createSprite(130,420)
fairy.addAnimation("flying",fairyImg)
fairy.scale = 0.25

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairySound.play()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  

  //write code to stop star in the hand of fairy
  if(star.y > 410 && starBody.position.y>410){
	  Matter.Body.setStatic(starBody,true)
	  star.visible= true

  }

  drawSprites();

}

function keyPressed() {


	if(keyCode === RIGHT_ARROW){
    fairy.x= fairy.x+20
}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === LEFT_ARROW){
     fairy.x=fairy.x-24

	}
}
