export interface ResourceInstance {
  id: ResourceInstanceId;
  definition: ResourceId;
  owner: PlayerId;
}

export interface Resource {
  id: ResourceId;
  type: ResourceType;
}

export enum ResourceType {
  Card,
  Minion,
  Spell,
  Hero,
  Weapon
}

export interface Action {
  type: ActionType
}

export enum ActionType {
  EndTurn
}

export enum PlayerId {
  One,
  Two
}

export type Deck = Resource[]
export type ResourceInstanceId = string
export type ResourceId = string
export type ResourceSlug = string
