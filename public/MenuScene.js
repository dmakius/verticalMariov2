class MenuScene extends Phaser.Scene {
    constructor() {
      super("menuScene");
  
    }
create(){
    this.background = this.add.sprite(0,0, 'background');
    this.background.setOrigin(0,0);
    this.logo = this.add.image(config.width/2, config.height/2, 'main_title');
    // if(mobileGame){
    this.title = this.add.bitmapText(config.width/2 - 300, 450, "gameFont", "press Start/Spacebar to start" , 36);
    this.title.setOrigin(0,0);
      // }else{
    //   this.game.title = this.game.add.bitmapText(this.game.world.centerX, 375, "gameFont", "press spacebar to start" , 36);
    // }
    this.topTitle = this.add.bitmapText(config.width/2-  150, 180, "gameFont", "Vertical" , 48);
    this.topTitle.setOrigin(0.5);
    this.topTitle.angle = -15;
    this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update(){
 
    if(this.start.isDown){
      this.scene.start('gameScene');

    }
  }
}
