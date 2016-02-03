'use strict';

define(
  'Game/Objects/Player',
  ['Phaser'],
  function (Phaser) {
    function Player(x, y, game) {
      this.sprite = game.add.sprite(x, y, 'player');
      game.physics.arcade.enable(this.sprite);

      this.configureAnimations();
    }

    Player.prototype = {
      sprite: null,
      facing: 'down',

      configureAnimations: function () {
        this.sprite.animations.add(
          'walk.up',
          [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );

        this.sprite.animations.add(
          'walk.left',
          [9, 10, 11, 12, 13, 14, 15, 16, 17]
        );

        this.sprite.animations.add(
          'walk.down',
          [18, 19, 20, 21, 22, 23, 24, 25, 26]
        );

        this.sprite.animations.add(
          'walk.right',
          [27, 28, 29, 30, 31, 32, 33, 34, 35]
        );
      }
    };

    return Player;
  }
);