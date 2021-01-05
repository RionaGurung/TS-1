/*class BlockC extends BaseClass{

  constructor(x, y, width, height){

    super(x,y,width,height);
 }
 
  display(){

    super.display();
    fill("#00FFFF");
    stroke("white");
  }
}*/

class BlockC{

    constructor(x, y, width, height) {

        var options = {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
      }

      display(){

        push();

        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("#00FFFF");
        stroke("white");
        strokeWeight(2);
        rect(0, 0, this.width, this.height);

        pop();
      }
}
