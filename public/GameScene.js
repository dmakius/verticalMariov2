class GameScene extends Phaser.Scene {
    
    constructor() {
      super("gameScene");
       self = this;
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

        this.goomba = new Goomba(this, 170, 400);
        this.goomba.play('walking');
        this.enemies = this.add.group();
        this.enemies.add(this.goomba);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.playerBrickColissions = this.physics.add.collider(this.player, this.initPlatforms, this.brickCollision, null, this);
        this.physics.add.collider(this.enemies, this.initPlatforms);
        this.playerEnemeyColissions = this.physics.add.collider(this.player, this.enemies,  this.playerCollision);

        this.goombaTimer = this.time.addEvent({delay: 2000,callback: this.createGoomba,callbackScope: this,loop: true});
        this.rowTimer = this.time.addEvent({delay: 7000,callback: this.addRow,callbackScope: this,loop: true});     
       
    }
    addRow(){
        var gap = Math.floor(Math.random()*20);
        for(var x = 0; x < 24; x++){
          if(x <= gap || x >= gap + 5){
            var platform = new Brick(this, 32*x,-330);
          }
          this.initPlatforms.add(platform);
        }
    }

    createGoomba(){
        var goomba = new Goomba(this, this.randomPlacement(), 20, Math.random);
        this.enemies.add(goomba);
    }

    randomPlacement(){
        var r = Math.random();
        var ranX;
        if(r >= 0.5){
          ranX = 100;
        }else{
          ranX = 500;
        }
        return ranX;
      }

    playerCollision(player, enemies){
        if(enemies.body.touching.up){
            console.log("Killing GOOMBA")
            enemies.play("flat");
            enemies.dead = true;
            player.body.velocity.y = -300;
            this.pointsUp = player.scene.add.sprite(enemies.body.x, enemies.body.y - 10, '200pts');
            self.time.delayedCall(500, self.killScore,this.pointsUp, this);
            console.log(enemies);
            self.time.delayedCall(500, self.killSprite, enemies, this);
            enemies.body.velocity.x = 0;
        }else{
            // console.log(player);
            player.dead = true;
            player.body.velocity.x = 0;
            player.body.velocity.y = -350;
    
             self.playerBrickColissions.destroy();
             self.playerEnemeyColissions.destroy();
            // this.player.alive = false;
        }
    }

    killScore(){
        console.log("Killing Score");
        this.pointsUp.destroy();
    }
    killSprite(enemies){
        console.log(enemies);
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
                onUpdate:function(){
                    self.physics.add.collider(brick, self.enemies, self.flip);

                },
                onComplete:function(){
                    brick.y = brick.y +12;
                   
                    tween.stop();
                }
            });
          }
    }
    flip(brick, enemies){
        enemies.body.velocity.x = 0;
        enemies.body.velocity.y = -100;
        enemies.flipped = true;
        enemies.play("flipped");
        console.log(enemies.body.touching);
        self.enemies.remove(enemies);
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
            var gap = Math.floor(Math.random()*20);
            // var gap = 10000;//
            for(var x = 0; x < 24; x++){
                if(x <= gap || x >= gap + 5){
                    var platform = new Brick(this, 32*x,150*y);
                }
                this.initPlatforms.add(platform);
            }
        }
    }


}

  