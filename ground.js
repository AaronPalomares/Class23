class Ground{
    constructor(x,y,width,height){
         var options = {
             isStatic:true
         }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height= height;
         World.add(world,this.body);
    }
    display(){
        var B = this.body.position;
        rectMode(CENTER);
        fill(91, 212, 12);
        rect(B.x,B.y,this.width,this.height);
    }
}