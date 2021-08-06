class Box{
    constructor(x,y,width,height){
         var options = {
             restitution:0.2
         }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height= height;
         World.add(world,this.body);
    }
    display(){
        var B = this.body.position;
        rectMode(CENTER);
        fill(177, 48, 10);
        rect(B.x,B.y,this.width,this.height);
    }
}