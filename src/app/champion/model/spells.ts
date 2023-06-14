export class Spells {
  championName: string;
  letter: string;
  description: string;
  range: string;
  name: string;
  spellCooldowns: SpellCooldown[];
  spellCosts: SpellCost[];

  constructor(
    championName: string,
    letter: string,
    description: string,
    range: string,
    name: string,
    cooldowns: SpellCooldown[],
    costs: SpellCost[]
  ) {
    this.championName = championName;
    this.letter = letter;
    this.description = description;
    this.range = range;
    this.name = name;
    this.spellCooldowns = cooldowns;
    this.spellCosts = costs;
  }
}

export class SpellCooldown {
  level: number;
  championName: string;
  letter: string;
  value: number;

  constructor(level: number, championName: string, letter: string, value: number) {
    this.level = level;
    this.championName = championName;
    this.letter = letter;
    this.value = value;
  }
}

export class SpellCost {
  level: number;
  championName: string;
  letter: string;
  value: number;

  constructor(level: number, championName: string, letter: string, value: number) {
    this.level = level;
    this.championName = championName;
    this.letter = letter;
    this.value = value;
  }
}