class Ball{

    constructor(x,y,radius){
    
         var options={
    
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
    
         }
    
    
      this.body= Bodies.circle(x,y,radius/2,options);
      this.r=radius;
    
         World.add(world,this.body);
    
    
    }
    display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate (pos.x,pos.y);
    fill(255,0,255);
    rotate (angle);
    ellipse(0,0,this.r,this.r);
    pop ();
    
    
    }
    
    
    
    
    }