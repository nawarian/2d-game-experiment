(function () {
  var proporcao = window.innerHeight / window.innerWidth;

  game = new Phaser.Game(320, Math.ceil(320 * proporcao), Phaser.CANVAS, null);

  game.state.add('Boot', Boot);

  game.state.start('Boot');
})();