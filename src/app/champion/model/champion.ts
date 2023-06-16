export class Champion {
  id: string;
  key: number;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  partype: string[];
  imageFullname: string;
  allytips: string;
  enemytips: string;
  tags: string;
  infoDefense: number;
  infoMagic: number;
  infoDifficulty: number;
  infoAttack: number;

  constructor(
    id: string,
    name: string,
    imageFullname: string,
    key: number = 0,
    title: string = '',
    lore: string = '',
    blurb: string = '',
    partype: string[] = [],
    allytips: string = '',
    enemytips: string = '',
    tags: string = '',
    infoDefense: number = 0,
    infoMagic: number = 0,
    infoDifficulty: number = 0,
    infoAttack: number = 0
  ) {
    this.id = id;
    this.key = key;
    this.name = name;
    this.title = title;
    this.lore = lore;
    this.blurb = blurb;
    this.partype = partype;
    this.imageFullname = imageFullname;
    this.allytips = allytips;
    this.enemytips = enemytips;
    this.tags = tags;
    this.infoDefense = infoDefense;
    this.infoMagic = infoMagic;
    this.infoDifficulty = infoDifficulty;
    this.infoAttack = infoAttack;
  }
}