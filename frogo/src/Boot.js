Boot = function (game) {};

Boot.prototype = {
  init: function () {
    // configures game area
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // area at center
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // forces device orientation
    this.scale.forceOrientation(false, true);

    // Updates screen layout
    this.scale.updateLayout(true);

    this.scale.refresh();

    // One touching point per time
    this.input.maxPointers = 1;
    this.input.addPointer();
  },
  create: function () {
    // Adding game states
    game.state.add('Splash', Splash);
    game.state.add('Preload', Preload);
    game.state.add('Menu', Menu);
    game.state.add('Play', Play);
    game.state.add('Score', Score);
    game.state.add('GameOver', GameOver);
    
    // Calls splash screen
    game.state.start('Splash');
  }
};