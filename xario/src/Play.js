Play = function (game) {};

Play.prototype = {
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.criarCenario();
    this.criarPlataformas();
    this.criarCaixas();
    
    this.criarJogador();
    this.criarBotoes();

    this.teclado = game.input.keyboard.createCursorKeys();
    this.botaoAtivo = '';
  },

  criarCenario: function () {
    this.game.stage.backgroundColor = '#d0f4f7';

    game.add.tileSprite(0, game.world.height - 42 - 63, game.width, 231, 'fundo', 0);

    this.pilares = game.add.group();
    var pilar1 = this.pilares.create(0, 0, 'pilares');
    var pilar2 = this.pilares.create(game.world.width - 21, 0, 'pilares');

    game.physics.arcade.enable(this.pilares);
    this.pilares.enableBody = true;

    pilar1.enableBody = true;
    pilar1.body.immovable = true;
    pilar1.body.moves = false;

    pilar2.enableBody = true;
    pilar2.body.immovable = true;
    pilar2.body.moves = false;

    this.tipoSolo = game.rnd.integerInRange(0, 5);

    this.solo = game.add.tileSprite(9, game.world.height - 42, game.width, 42, 'solos', this.tipoSolo);

    game.physics.arcade.enable(this.solo);
    this.solo.enableBody = true;
    this.solo.body.immovable = true;
    this.solo.body.moves = false;
  },

  criarPlataformas: function () {
    this.plataformas = game.add.group();

    game.physics.arcade.enable(this.plataformas);
    this.plataformas.enableBody = true;

    var quantidade = game.rnd.integerInRange(10, 15);

    var posicoesY = [1, 3, 5];

    for (var i = 0; i < quantidade; i++) {
      var x = game.rnd.integerInRange(0, Math.floor(game.world.width / 21) - 1) * 21;
      var y = posicoesY[game.rnd.integerInRange(0, posicoesY.length - 1)] * 21;

      var largura = game.rnd.integerInRange(2, 3) * 21;

      var plataforma = game.add.tileSprite(x, y, largura, 21, 'solos', this.tipoSolo, this.plataformas);
      plataforma.enableBody = true;
      plataforma.body.moves = false;
    }
  },

  criarCaixas: function () {
    this.caixas = game.add.group();

    game.physics.arcade.enable(this.caixas);
    this.caixas.enableBody = true;

    var quantidade = game.rnd.integerInRange(5, 10);

    for (var i = 0; i < quantidade; i++) {
      var x = game.rnd.integerInRange(1, Math.floor((game.world.width / 21) - 1)) * 21;
      var y = game.rnd.integerInRange(0, 5) * 21;

      var caixa = this.caixas.create(x, y, 'caixas');

      caixa.frame = game.rnd.integerInRange(0, 3);

      caixa.body.gravity.y = 300;
      caixa.body.bounce.y = 0.2 + Math.random() * 0.2;
    }
  },

  criarJogador: function () {
    this.jogador = game.add.sprite(game.world.centerX, game.world.height - 65, 'jogador');
    this.jogador.vidas = this.vidas;
    this.jogador.atingido = false;

    this.jogador.animations.add('paraEsquerda', [6, 7]);
    this.jogador.animations.add('paraDireita', [4, 5]);

    game.physics.arcade.enable(this.jogador);
    this.jogador.enableBody = true;
    this.jogador.body.gravity.y = 200;

    this.jogador.body.setSize(17, 18, 2, 3);

    this.jogador.body.collideWorldBounds = true;
  },

  criarBotoes: function () {
    var botao_esquerda = game.add.button(0, game.height - 64, 'botoes_jogo', null, this, 4, 0, 4);
    botao_esquerda.name = 'esquerda';
    botao_esquerda.events.onInputDown.add(this.botaoPressionado, this);

    var botao_direita = game.add.button(64, game.height - 64, 'botoes_jogo', null, this, 5, 1, 5);
    botao_direita.name = 'direita';
    botao_direita.events.onInputDown.add(this.botaoPressionado, this);

    var botao_cima = game.add.button(game.width - 64, game.height - 64, 'botoes_jogo', null, this, 6, 2, 6);
    botao_cima.name = 'cima';
    botao_cima.events.onInputDown.add(this.botaoPressionado, this);
  },

  botaoPressionado: function (botao) {
    this.botaoAtivo = botao.name;
  },

  botaoSolto: function () {
    this.botaoAtivo = '';
  },

  verificarTeclas: function () {
    this.jogador.body.velocity.x = 0;

    if (this.teclado.left.isDown || this.botaoAtivo == 'esquerda') {
      this.jogador.body.velocity.x = -100;

      if (this.jogador.body.touching.down) {
        this.jogador.animations.play('paraEsquerda', 7, true);
      }
    }

    if (this.teclado.right.isDown || this.botaoAtivo == 'direita') {
      this.jogador.body.velocity.x = 100;

      if (this.jogador.body.touching.down) {
        this.jogador.animations.play('paraDireita', 7, true);
      }
    }

    if ((this.teclado.up.isDown || this.botaoAtivo == 'cima') && this.jogador.body.touching.down) {
      this.jogador.body.velocity.y = -170;
      this.jogador.animations.stop();

      if (this.jogador.animations.currentAnim.name == 'paraDireita') {
        this.jogador.frame = 8;
      } else {
        this.jogador.frame = 9;
      }
    }
  },

  update: function () {
    game.physics.arcade.collide(this.caixas, this.pilares);
    game.physics.arcade.collide(this.caixas, this.solo);
    game.physics.arcade.collide(this.caixas, this.plataformas);
    game.physics.arcade.collide(this.caixas, this.caixas);

    game.physics.arcade.collide(this.jogador, this.pilares);
    game.physics.arcade.collide(this.jogador, this.solo);
    game.physics.arcade.collide(this.jogador, this.plataformas);
    game.physics.arcade.collide(this.jogador, this.caixas);

    this.verificarTeclas();
  }
};