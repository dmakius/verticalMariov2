var gameSettings = {
  playerSpeed: 200,
  maxPowerups: 2,
  powerUpVel: 50,
}

var config = {
  width: 700,
  height: 600,
  backgroundColor: 0x000000,
  scene: [BootScene, LoadingScene, MenuScene, GameScene],
  pixelArt: true,
 
  physics: {
    default: "arcade",
    arcade:{
        debug: false,
        debugShowVelocity: false
    }
  },
  callbacks: {
    postBoot: function (game) {
      // In v3.15, you have to override Phaser's default styles
      game.canvas.style.width = '98%';
      game.canvas.style.height = '50%';
    }
  }
}


var game = new Phaser.Game(config);
