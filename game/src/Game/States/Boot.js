'use strict';

define(
  'Game/States/Boot',
  [
    'Game/States/Level01',
    'Phaser'
  ],
  function (Level01, Phaser) {
    return {

      stateName: 'Boot',

      start: function (game) {
        if (Object.keys(game.state.states).indexOf(this) == '-1') {
          game.state.add(this.stateName, this);
        }

        game.state.start(this.stateName);
      },

      preload: function () {},

      create: function () {
        Level01.start(this.game);
      }

    };
  }
);