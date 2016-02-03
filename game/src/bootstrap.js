'use strict';

require(
  [
    'Game/Main'
  ],
  function (Game) {
    Game.configure({
      gameScreen: {
        width: 600,
        height: 300,
        parentElement: 'game'
      }
    });

    Game.start();

    window.nawarian = {
      Game: Game
    };
  }
);