export class Spells {
  id: string;
  championid: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldown: string;
  cooldownburn: string;
  cost: string;
  costburn: string;
  resource: string;
  rangeburn: string;
  leveltipLabel: string;
  leveltipEffect: string;
  effect: string;
  effectburn: string;
  costtype: string;
  maxammo: number;
  range: string;
  image_url: string;

  constructor(data: any) {
    this.id = data.id;
    this.championid = data.championid;
    this.name = data.name;
    this.description = data.description;
    this.tooltip = data.tooltip;
    this.maxrank = data.maxrank;
    this.cooldown = data.cooldown;
    this.cooldownburn = data.cooldownburn;
    this.cost = data.cost;
    this.costburn = data.costburn;
    this.resource = data.resource;
    this.rangeburn = data.rangeburn;
    this.leveltipLabel = data.leveltipLabel;
    this.leveltipEffect = data.leveltipEffect;
    this.effect = data.effect;
    this.effectburn = data.effectburn;
    this.costtype = data.costtype;
    this.maxammo = data.maxammo;
    this.range = data.range;
    this.image_url = data.image_url;
  }
}
