Play = function (game) {};

Play.prototype = {
  create: function () {
    this.criarCenario();
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
  }
};