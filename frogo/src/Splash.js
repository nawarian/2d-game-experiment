Splash = function (game) {};

Splash.prototype = {
  preload: function () {
    this.load.image('logoSplash', 'asset/logotipo_empresa.png');
    
    this.load.image('logoJogo', 'asset/logotipo_jogo.png');
    this.load.image('barraLoading', 'asset/barra_loading.png');
  },

  create: function () {
    this.game.stage.backgroundColor = '#FFFFFF';

    this.logo = game.add.sprite(
                  game.world.centerX,
                  game.world.centerY,
                  'logoSplash'
                );
    this.logo.anchor.setTo(0.5, 0.5);

    setTimeout(function() {
      game.state.start('Preload');
    }, 300);
  }
};