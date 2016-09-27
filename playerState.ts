import * as res from './resource';

class PlayerState {
  isTurn: boolean;
  manaTotal: number;
  manaSpent: number;
  life: number;
  damage: number;
  armor: number;
  id: res.PlayerId;
  hand: any[];
  constructor(
    isTurn: boolean,
    manaTotal: number,
    manaSpent: number,
    life: number,
    damage: number,
    armor: number,
    id: res.PlayerId
  ) {
    this.isTurn = isTurn
    this.manaTotal = manaTotal
    this.manaSpent = manaSpent
    this.life = life
    this.damage = damage
    this.armor = armor
    this.id = id
    this.hand = []
  }
}

export function initialPlayerState(id: res.PlayerId, isTurn: boolean) {
  return new PlayerState(
    isTurn,
    1,  // mana total
    0,  // mana spent
    30, // life
    0,  // damage
    0,  // armor
    id
  )
}
