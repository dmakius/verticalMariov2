class Brick extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y){
        super(scene, x, y, "brick");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.setOrigin(0,0);
        scene.physics.add.existing(this);
       
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
        // this.physics.arcade.enable(this);
        this.body.immovable = true;
        this.body.velocity.y = 20;
    }
} 