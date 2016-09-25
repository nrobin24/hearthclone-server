import * as res from './resource';

class PlayerState {
  manaTotal: number;
  manaSpent: number;
  life: number;
  damage: number;
  armor: number;
  id: res.PlayerId;
  constructor(
    manaTotal: number,
    manaSpent: number,
    life: number,
    damage: number,
    armor: number,
    id: res.PlayerId
  ) {
    this.manaTotal = manaTotal
    this.manaSpent = manaSpent
    this.life = life
    this.damage = damage
    this.armor = armor
    this.id = id
  }
}

export function initialPlayerState(id: res.PlayerId) {
  return new PlayerState(
    1,  // mana total
    0,  // mana spent
    30, // life
    0,  // damage
    0,  // armor
    id
  )
}
