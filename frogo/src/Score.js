Score = function (game) {};

Score.prototype = {
  init: function (pontos) {
    this.pontos = (pontos != null) ? pontos : 0;

    game.scale.stopFullScreen();
  },

  create: function () {
    this.game.stage.backgroundColor = '#0099CC';

    this.fundo = game.add.image(game.world.centerX, game.world.height, 'fundo_score');
    this.fundo.anchor.setTo(0.5, 1);

    this.titulo = game.add.sprite(game.world.centerX, 30, 'score');
    this.titulo.anchor.setTo(0.5, 0);

    this.botao_continuar = game.add.button(game.world.centerX, game.height - 60, 'botao_play', this.acaoBotaoContinuar, this, 1, 0, 1);
    this.botao_continuar.anchor.setTo(0.5, 0.5);

    var estilo = {
      font: 'bold 30px Arial',
      fill: '#fff',
      boundsAlignH: 'center',
      boundsAlignV: 'middle'
    };

    var texto = game.add.text(0, game.world.centerY, this.pontos + ' Pontos!', estilo);
    texto.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2);
    texto.setTextBounds(0, game.world.centerY, game.world.width, 50);
  },

  acaoBotaoContinuar: function () {
    game.scale.startFullScreen(false);
    game.state.start('Play', true, false, this.pontos);
  }
};