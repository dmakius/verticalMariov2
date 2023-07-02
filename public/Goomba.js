class Goomba extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,ran){
      super(scene, x, y,"goomba");
      scene.add.existing(this);
      scene.physics.add.existing(this);
      scene.physics.world.enableBody(this);
      this.setInteractive();
      this.body.gravity.y = 700;
      this.dead = false;
      this.flipped = false;
      console.log(ran);
      if(ran > 0.65){
        this.body.velocity.x =  -50;
        this.left = true;
      }else{
        this.body.velocity.x =  50;
        this.left = false;
      }
      
      scene.anims.create({
        key: "goomba_walking",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 0,
            end: 1
        }),
        frameRate: 10,
        repeat: -1
      });
      scene.anims.create({
        key: "goomba_flat",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 2,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "goomba_dead",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 2,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "goomba_flipped",
        frames: scene.anims.generateFrameNumbers("goomba", {
            start: 3,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
    }


    update(){
      if(this.dead == false){
          if(this.x > 710){
              this.x = -5;
            }

          if(this.x < -10){
              this.x = 705;
            }
          
          //prevent goomba from stalling
          if(this.body.velocity.x == 0){
            if(this.left){
              this.body.velocity.x =  -50;
            }else{
              this.body.velocity.x =  50;

            }
          }
          
          if(this.y >= config.height + 50){
              this.destroy();
          }
      }else if(this.flipped){
            this.play("flipped");
      }else{
          this.dead = true;
        }

    }

 }
