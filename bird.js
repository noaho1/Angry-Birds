class Bird extends BaseClass {
    constructor(x, y) {
        //BaseClass's constructor
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bird.png");
    }
    display() {

        super.display();
        var pos = this.body.position;

        //pos.x = mouseX;
       // pos.y = mouseY;
    }
};