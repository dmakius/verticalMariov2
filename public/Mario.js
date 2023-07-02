class Mario extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y){
      super(scene, x, y, "mario");
      scene.add.existing(this);
      scene.physics.add.existing(this);
      scene.physics.world.enableBody(this);
      this.body.gravity.y = 700;
      this.cursors = scene.input.keyboard.createCursorKeys();
      this.dead = false;
      this.facingRight = true;
      this.setInteractive();

      scene.anims.create({
        key: "stand-right",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 0,
            end: 0
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "stand-left",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 14,
            end: 14
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "walk-right",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 1,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "walk-left",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 15,
            end:17
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "jump-left",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 18,
            end:18
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "jump-right",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 4,
            end:4
        }),
        frameRate: 10,
        repeat: -1
      });

      scene.anims.create({
        key: "mario-flipped",
        frames: scene.anims.generateFrameNumbers("mario", {
            start: 12,
            end:12
        }),
        frameRate: 10,
        repeat: -1
      });


     
  }

  update(){
        if(this.dead == false){
            if(this.cursors.up.isDown && this.body.wasTouching.down){
                // this.jumpSound.play();
                this.body.velocity.y = -480;
              }

            if (this.cursors.left.isDown) {
                this.x -= 5;
                this.play("walk-left", true);
            } else if (this.cursors.right.isDown) {
                this.x += 5;
                this.play("walk-right", true);
            }else{
                if(this.facingRight == true){
                    this.play("stand-right");
                }else{
                    this.play("stand-left");
                }
            }

            if(this.body.touching.down == false){
                if(this.facingRight == true){
                    this.play("jump-right");
                }else{
                    this.play("jump-left");
                }
            }
        }else{
            this.play("mario-flipped");
        }

        // //adding jumping frames
        

        //moving out of bounds
        if(this.x >= 700){
          this.x = -9;
        }
        if(this.x <= -10){
            this.x = 700;
        }
    }
}
