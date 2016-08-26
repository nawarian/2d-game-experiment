Preload = function (game) {};

Preload.prototype = {
  preload: function () {
    this.logoJogo = game.add.sprite(game.world.centerX, 30, 'logoJogo');
    this.logoJogo.anchor.setTo(0.5, 0);

    this.barraLoading = game.add.sprite(
                          game.world.centerX,
                          game.world.height - 50,
                          'barraLoading'
                        );
    this.barraLoading.anchor.setTo(0.5, 0);

    game.load.setPreloadSprite(this.barraLoading);

    game.load.spritesheet('botao_play', 'asset/botao_play.png', 128, 64);
    game.load.image('fundo_menu', 'asset/fundo_menu.png');

    game.load.image('arbusto', 'asset/arbusto.png');
    game.load.image('bueiro', 'asset/bueiro.png');
    game.load.image('tesouro', 'asset/tesouro.png');

    game.load.spritesheet('estrada', 'asset/estrada.png', 32, 64);
    game.load.spritesheet('jogador', 'asset/jogador.png', 32, 48);
    game.load.spritesheet('botoes_jogo', 'asset/botoes_jogo.png', 64, 64);
    game.load.spritesheet('caminhonete_marrom', 'asset/caminhonete_marrom.png', 134, 70);
    game.load.spritesheet('pickup_marrom', 'asset/pickup_marrom.png', 105, 70);
    
    game.load.image('score', 'asset/score.png');
    game.load.image('fundo_score', 'asset/fundo_score.png');
    game.load.image('gameover', 'asset/gameover.png');
    game.load.image('fundo_gameover', 'asset/fundo_gameover.png');

    game.load.audio('musica', ['asset/musica.ogg', 'asset/musica.mp3']);
    game.load.audio('pontuou', ['asset/pontuou.ogg', 'asset/pontuou.mp3']);
    game.load.audio('fimjogo', ['asset/fimjogo.ogg', 'asset/fimjogo.mp3']);
  },
  create: function () {
    game.state.start('Menu');
  }
};