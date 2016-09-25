import * as res from "./resource";

class Card implements res.Resource {
  id: res.ResourceId;
  type: res.ResourceType;
  constructor(id: string) {
    this.id = id;
    this.type = res.ResourceType.Card;
  }
}

class CardInstance implements res.ResourceInstance {
  id: res.ResourceInstanceId
  definition: res.ResourceId
  owner: res.PlayerId
  location: CardLocation
  constructor(
    id: string,
    definition: string,
    owner: res.PlayerId,
    location: CardLocation
  ) {
    this.id = id;
    this.definition = definition;
    this.owner = owner;
    this.location = location;
  }
}

enum CardLocation {
  pile,
  hand,
  discard
}
