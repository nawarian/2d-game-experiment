Play = function (game) {};

Play.prototype = {
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.criarCenario();
    this.criarTesouro();
    this.criarArbustos();
    this.criarJogador();
    this.criarVeiculos();
  },

  criarCenario: function () {
    this.game.stage.backgroundColor = '#82bb65';

    var quantidade = Math.floor((game.height - 96) / 64);

    this.pistas = [64];

    for (var i = 0; i < (quantidade - 1); i++) {
      if (this.pistas[i] > game.height-96 || this.pistas[i] < 64) {
        break;
      }

      var espaco = game.rnd.integerInRange(1, 2);

      game.add.tileSprite(0, this.pistas[i], game.width, 64, 'estrada', 0);

      this.pistas.push(this.pistas[i] + 64 + (espaco * 32))
    }
  },

  criarTesouro: function () {
    this.tesouro = game.add.sprite(game.world.centerX, game.world.height - 64, 'tesouro');
    this.tesouro.anchor.setTo(0.5, 0);

    game.physics.arcade.enable(this.tesouro);
    this.tesouro.enableBody = true;
  },

  criarArbustos: function () {
    this.arbustos = game.add.group();

    game.physics.enable(this.arbustos);
    this.arbustos.enableBody = true;

    quantidade = Math.floor(game.width / 32);

    for (var y = 0; y < this.pistas.length - 1; y++) {
      for (var x = 0; x < quantidade; x++) {

        if (game.rnd.integerInRange(0, 10) > 5) {
          continue;
        }

        var arbusto = this.arbustos.create(x * 32, this.pistas[y] + 64, 'arbusto');
        arbusto.body.setSize(26, 26, 3, 3);

        arbusto.body.immovable = true;
        arbusto.body.moves = false;
      }
    }
  },

  criarJogador: function () {
    this.jogador = game.add.sprite(game.world.centerX, 16, 'jogador');

    this.jogador.animations.add('paraCima', [0, 1, 2, 1]);
    this.jogador.animations.add('paraBaixo', [6, 7, 8, 7]);
    this.jogador.animations.add('paraEsquerda', [9, 10, 11, 10]);
    this.jogador.animations.add('paraDireita', [3, 4, 5, 4]);

    game.physics.arcade.enable(this.jogador);
    this.jogador.enableBody = true;

    this.jogador.body.setSize(18, 28, 7, 10);

    this.jogador.body.collideWorldBounds = true;

    this.jogador.animations.play('paraBaixo', 7, true);
  },

  criarVeiculos: function () {
    this.veiculos = game.add.group();

    game.physics.arcade.enable(this.veiculos);
    this.veiculos.enableBody = true;

    var tipoVeiculo = ['pickup_marrom', 'caminhonete_marrom'];
    var direcoes = ['Direita',  'Esquerda'];

    for (var i = 0; i < this.pistas.length - 1; i++) {
      var tipo = tipoVeiculo[game.rnd.integerInRange(0, tipoVeiculo.length - 1)];
      var veiculo = this.veiculos.create(32, this.pistas[i] - 16, tipo);

      if (tipo == 'pickup_marrom') {
        veiculo.body.setSize(105, 43, 0, 19);
      } else {
        veiculo.body.setSize(130, 43, 2, 19);
      }

      veiculo.animations.add('irDireita', [0, 1]);
      veiculo.animations.add('irEsquerda', [2, 3]);

      veiculo.direcao = [game.rnd.integerInRange(0, direcoes.length - 1)];

      if (veiculo.direcao == 'Direita') {
        veiculo.body.velocity.x = game.rnd.integerInRange(80, 150);
      } else {
        veiculo.body.velocity.x = game.rnd.integerInRange(80, 150) * -1;
      }

      veiculo.animations.play('ir'+veiculo.direcao, game.rnd.integerInRange(4, 7), true);
    }
  }
};