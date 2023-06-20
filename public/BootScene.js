class BootScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background','/assets/bg.png');
    this.load.image('preloader', '/assets/preloader.png');
    this.load.bitmapFont('gameFont', '/assets/fonts/font.png', '/assets/fonts/font.fnt');
    this.load.bitmapFont('marioFont', '/assets/fonts/mario20_0.png', '/assets/fonts/mario20.fnt');
  }

  create(){
    this.add.text(20, 20 , "loading.....");
    this.scene.start('loadingScene');
  }
}
