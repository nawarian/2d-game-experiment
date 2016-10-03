(function () {
  var proporcao = window.innerWidth / window.innerHeight;

  game = new Phaser.Game(Math.ceil(210 * proporcao), 210, Phaser.CANVAS, null);

  game.state.add('Boot', Boot);

  game.state.start('Boot');
})();