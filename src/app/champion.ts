export class Champion {
    id: string;
    key: number;
    name: string;
    title: string;
    lore: string;
    blurb: string;
    partype: string[];
    image_url: String;
    allytips: string;
    enemytips: string;
    tags: string;
    infoDefense: number;
    infoMagic: number;
    infoDifficulty: number;
    infoAttack: number;
  
    constructor(
      id: string,
      key: number,
      name: string,
      title: string,
      lore: string,
      blurb: string,
      partype: string[],
      image_url: string,
      allytips: string,
      enemytips: string,
      tags: string,
      infoDefense: number,
      infoMagic: number,
      infoDifficulty: number,
      infoAttack: number
    ) {
      this.id = id;
      this.key = key;
      this.name = name;
      this.title = title;
      this.lore = lore;
      this.blurb = blurb;
      this.partype = partype;
      this.image_url = image_url;
      this.allytips = allytips;
      this.enemytips = enemytips;
      this.tags = tags;
      this.infoDefense = infoDefense;
      this.infoMagic = infoMagic;
      this.infoDifficulty = infoDifficulty;
      this.infoAttack = infoAttack;
    }
  }
  