'use strict';

define(
  'Game/Main',
  ['Phaser', 'Game/States/Boot'],
  function (Phaser, BootGameState) {
    var

    config,
    game = {
      configure: function (cfg) {
        config = cfg || {};
      },

      start: function () {
        this.game = new Phaser.Game(
          config.gameScreen.width || 800,
          config.gameScreen.height || 600,
          config.gameScreen.renderer || Phaser.AUTO,
          config.gameScreen.parentElement || null
        );

        BootGameState.start(this.game);
      }
    };

    return game;
  }
);