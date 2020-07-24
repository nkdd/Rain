var drops = [];
var umbrella,umbrella_img;
var thunder,thunderImg1,thunderImg2,thunderImg3,thunderImg4;

	function preload(){
		
		thunderImg1 = loadImage("images/thunder2.png");
	/*	thunderImg2 = loadImage("../images/thunderImage2.png");
		thunderImg3 = loadImage("../images/thunderImage3.png");
		thunderImg4 = loadImage("../images/thunderImage4.png");*/
	}

	
	function setup() {
	  createCanvas(640, 360);
	  umbrella = new Umbrella(320,320,50,100);
	  for (var i = 0; i < 500; i++) {
		drops[i] = new Drop();
		
	  }

	  thunder = createSprite(320,20,80,100);
	  thunder.addImage(thunderImg1);
	  thunder.visible = false;
	  thunder.scale = 1;

	}
	var i;
	function draw() {
	  background("black");
	  for (var i = 0; i < drops.length; i++) {
	    drops[i].fall();
	    drops[i].show();
	  }

	  umbrella.display();

	  if(frameCount%60 === 0) {
		thunder.visible = true;
		i = frameCount;
	  } else  {
		  thunder.visible = false;
	  }

	drawSprites();

	//  image(umbrella_img,300,240,50,100);
	/*  thunder.CreatedFrame = frameCount;
	  switch(rand){
		 case 1 :  image(thunderImg1,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg2,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg3,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg4,300,240,50,100);
		 break;
		  }
	  thunder.scale = random(0.3,0.8);*/
   }

 /* if(thunder.CreatedFrame + 10 === frameCount && thunder){
	  thunder.destroy();
   }*/



	

