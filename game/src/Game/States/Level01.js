'use strict';

define(
  'Game/States/Level01',
  [
    'Phaser',
    'Game/Objects/Player'
  ],
  function (Phaser, Player) {
    return {

      stateName: 'Level01',

      start: function (game) {
        if (Object.keys(game.state.states).indexOf(this) == '-1') {
          game.state.add(this.stateName, this);
        }

        game.state.start(this.stateName);
      },

      preload: function () {
        this.game.stage.backgroundColor = '#c9c9c9';
        this.game.load.spritesheet('player', 'assets/sprites/lidia.png', 64, 64);
      },

      create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = new Player(10, 10, this.game);
        window.player = this.player;
      }

    };
  }
);