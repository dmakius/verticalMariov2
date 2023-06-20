class Goomba extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y){
      super(scene, x, y, "goomba");
      scene.add.existing(this);
      scene.physics.add.existing(this);
      scene.physics.world.enableBody(this);
      this.setInteractive();
      this.body.gravity.y = 700;
      this.dead = false;

      this.body.velocity.x =  50;
      scene.anims.create({
        key: "walking",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 0,
            end: 1
        }),
        frameRate: 10,
        repeat: -1
      });
      scene.anims.create({
        key: "flat",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 2,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "dead",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 2,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "flipped",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 3,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
    }

    update(){
        // if(this.body.x > 710){
        //     this.body.x = -5;
        //   }
        //   if(this.body.x < -10){
        //     this.body.x = 705;
        //   }
        
        //   if(this.body.x >= config.width || this.body.x <= 0){
        //     this.body.velocity.x *= -1;
        //   }
          
        //   if(this.body.velocity.x == 0){
        //     this.body.velocity.x = 50;
        //   }
        
        //   if(this.body.y >= config.height + 50){
        //     this.destroy();
        //   }

        if(this.dead){
            console.log("dead!");
            this.scene.time.addEvent({
                delay: 400,
                callback: this.killSprite,
                callbackScope: this,
                loop: false
              })
            this.dead = false;
        }

      }

      killSprite(){
        this.destroy();
      }
 }
