class Pig extends BaseClass {
    constructor(x, y) {

        // override the default property
        super(x,y,50,50);
        this.image= loadImage("sprites/enemy.png");
        this.visibility = 255; // rgba->a completely transparent(255)/translucent(0)
    }

    display(){
        
        if(this.body.speed < 3){
            super.display();
        }else{ 
           
            push ();// to add tint setting
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility); // 
            image(this.image, this.body.position.x, this.body.position.x, this.width, this.height);
            pop ();// restore it back so that it does not impact all other objects of the world
        }  

    }
   
};              