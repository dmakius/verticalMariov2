class Coin extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y){
        super(scene, x, y,"coin");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.world.enableBody(this);
        this.setInteractive();
        this.body.immovable = true;
        this.body.velocity.y = 25;
    }

    update(){
        if(this.y >= 500){
          var ranX = Math.floor(Math.random() * 650);
          this.x = ranX;
          this.y = -50;
        }
    }

    relocate(){
        var ranX = Math.floor(Math.random() * 650);
        this.x = ranX;
        this.y = -50;
        console.log("Coin relocated: " + this.x + ", "+ this.y);
    }
}