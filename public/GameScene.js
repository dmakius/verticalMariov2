class GameScene extends Phaser.Scene {
    
    constructor() {
      super("gameScene");
        var s = this;
    }
  
    preload(){
     
    }
  
    create(){
        this.background = this.add.sprite(0,0, 'background');
        this.background.setOrigin(0,0);
        this.createFloor();
        
        this.mario = new Mario(this, 70, 400);
        this.mario.play('stand-right');
        this.player = this.add.group();
        this.player.add(this.mario);

        this.goomba = new Goomba(this, 170, 300);
        this.goomba.play('walking');
        this.enemies = this.add.group();
        this.enemies.add(this.goomba);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.initPlatforms, this.brickCollision, null, this);
        this.physics.add.collider(this.enemies, this.initPlatforms);
        this.physics.add.collider(this.player, this.enemies,  this.playerCollision);


        console.log(this);
        this.sc = this;
        // this.physics.add.overlap(this.player,, this.brickCollision, null, this);
     
       
    }
    playerCollision( player, enemies){
        if(enemies.body.touching.up){
            // console.log(enemies);
            enemies.play("flat");
            enemies.dead = true;
            player.body.velocity.y = -300;
            this.pointsUp = player.scene.add.sprite(enemies.body.x, enemies.body.y - 10, '200pts');
            // this.scene.time.addEvent({
            //     delay: 400,
            //     callback: this.killSprite,
            //     callbackScope: this,
            //     loop: false
            //   })
            // enemies.body.velocity.x = 0;
        }
    }
    killSprite(enemies){
        console.log("killing bad guy!");
        enemies.destroy();
    }
    brickCollision(player, brick){
        if(brick.body.touching.down){
            console.log("BRICK COLLISION");
            var tween = brick.scene.tweens.add({
                targets: brick,
                y: brick.y -10,
                delay: 10,
                duration: 60,
                ease: 'linear',
                onComplete:function(){
                    brick.y = brick.y +12;
                    tween.stop();
                }
            });
          }
    }
    
    update(){
        this.mario.update();  
        this.goomba.update();
        if(this.mario.y > 700){
            this.scene.start('menuScene');
        }
    }

    createFloor(){
        this.initPlatforms = this.add.group();
        for(var y = -2; y < 5; y ++){
            // var gap = Math.floor(Math.random()*20);
            var gap = 10000;//
            for(var x = 0; x < 24; x++){
                if(x <= gap || x >= gap + 5){
                    var platform = new Brick(this, 32*x,150*y);
                }
                this.initPlatforms.add(platform);
            }
        }
    }


}

  