import {GameState, initialGameState} from "./gameState";
import * as res from './resource';
import {initialPlayerState} from './playerState';

export function act(gameState: GameState, action: res.Action) {
  switch (action.type) {
    case res.ActionType.EndTurn:
      // return advanceTurn(gameState)
  }
  // which player is it
  // what are they targeting
}

export function newGame() {
  return initialGameState()
}
