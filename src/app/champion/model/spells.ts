export class Spells {
  championName: string;
  letter: string;
  description: string;
  range: string;
  name: string;
  cooldowns: number[];
  costs: number[];

  constructor(
    championName: string,
    letter: string,
    description: string,
    range: string,
    name: string,
    cooldowns: number[],
    costs: number[]
  ) {
    this.championName = championName;
    this.letter = letter;
    this.description = description;
    this.range = range;
    this.name = name;
    this.cooldowns = cooldowns;
    this.costs = costs;
  }
}
