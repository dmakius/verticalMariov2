class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loadingScene");

  }

  preload() {
    this.background = this.add.sprite(0,0, 'background');
    this.background.setOrigin(0,0);
    this.preloadText = this.add.bitmapText(config.width/2-150, config.height/2-130, "gameFont", "LOADING..." , 48);
    this.preloadText.setOrigin(0,0);
    this.preloadBar = this.add.sprite(config.width/2, config.height/2, 'preloader');
    this.preloadBar.setOrigin(0.5, 0.5);
    // this.setPreloadSprite(this.preloadBar);

    this.load.spritesheet('mario', 'assets/mario_small.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('goomba','/assets/goomba.png',{ frameWidth: 32, frameHeight: 32 });
  
    this.load.image('coin', '/assets/coin.png');
    this.load.image('brick', '/assets/block.png', 32, 32);
    this.load.image('main_title', '/assets/main_title.gif');
    this.load.image('200pts','/assets/200.gif');
  

    // //SOUNDS
    // this.game.load.audio('mainTheme', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/main-theme.mp3');
    // this.game.load.audio('getCoin', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/smb_coin.wav');
  	// this.game.load.audio('jump', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/smb_jump-small.wav');
  	// this.game.load.audio('dead', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/music_die.mp3');
    // this.game.load.audio('hitHead' , 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/hit_head.mp3');
    // this.game.load.audio('squishEnemy', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/squish_enemy.mp3');
    // this.game.load.audio('shell_hit', 'public/VerticalMario/assets/sounds/smb_kick.mp3');
  }




  create() {
    this.scene.start('menuScene');

  }

}
