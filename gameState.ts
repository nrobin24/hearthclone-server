import * as res from './resource';
import {initialPlayerState} from "./playerState";

export class GameState {
  currentPlayer: res.PlayerId
  resourceInstances: res.ResourceInstance[]
  playerStates: Object
  constructor(
    currentPlayer : res.PlayerId,
    resourceInstances : res.ResourceInstance[],
    playerStates : Object
  ) {
    this.currentPlayer = currentPlayer
    this.resourceInstances = resourceInstances
    this.playerStates = playerStates
  }
}

export function initialGameState() {
  const firstPlayer = res.PlayerId.One
  const startingResources = []
  const playerStates = [
    initialPlayerState(res.PlayerId.One),
    initialPlayerState(res.PlayerId.Two)
  ]

  return new GameState(firstPlayer, startingResources, playerStates)
}

export function advanceTurn(gameState: GameState) {
  const {currentPlayer, resourceInstances, playerStates} = gameState
  const nextPlayer = {
    [res.PlayerId.One]: res.PlayerId.Two,
    [res.PlayerId.Two]: res.PlayerId.One,
  }[currentPlayer]

  return new GameState(nextPlayer, resourceInstances, playerStates)
}
