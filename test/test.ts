import {newGame} from "../index";
import * as res from '../resource';

var assert = require('chai').assert

describe('newGame', () => {
  it(`should be player one's turn`, () => {
    const gameState = newGame()
      assert.equal(gameState.currentPlayer, res.PlayerId.One)
  })
})
