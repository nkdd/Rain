class Umbrella{
    constructor(x,y,width,height){
        this.image=loadImage("images/man1.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        imageMode(CENTER);
       // ecllipse(0,0,60,60);
       // umbrella.addImage("umbrella",umbrella_img);
       
        image(this.image,this.x,this.y,this.width,this.height);      
        pop();
    }
}