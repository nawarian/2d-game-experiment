Menu = function (game) {};

Menu.prototype = {
  create: function () {
    this.game.stage.backgroundColor = '#0099CC';
    this.fundoMenu = game.add.image(
                       game.world.centerX,
                       game.world.height,
                       'fundo_menu'
                     );
    this.fundoMenu.anchor.setTo(0.5, 1);

    this.logoJogo = game.add.sprite(
                      game.world.centerX,
                      30,
                      'logoJogo'
                    );
    this.logoJogo.anchor.setTo(0.5, 0);

    // creates "play" button
    this.botao_play = game.add.button(
                        game.world.centerX,
                        game.world.centerY,
                        'botao_play',
                        this.acaoBotaoPlay,
                        this,
                        1,
                        0,
                        1
                      );
    this.botao_play.anchor.setTo(0.5, 0.5);
  },

  update: function () {

  },

  acaoBotaoPlay: function () {
    game.state.start('Play');
  }
};