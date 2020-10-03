class Box {
    var options(){
        isStatic : true    
    }
       
    constructor(){
        this.body = Bodies.rectangle(800,700,200,20,options);
        this.body = Bodies.rectangle(790,690,20,100,options);
        this.body = Bodies.rectangle(790,690,20,100,options);
    }
}