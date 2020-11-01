class bob {

    constructor(x,y,r){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8

        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r = r;

    }

    display(){

      
        var pos = this.body.position;

    
        ellipse(pos.x,pos.y, this.r*2,this.r*2);
  

    }



}