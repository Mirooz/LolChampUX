export class Stats {
    id: number;
    championid: string;
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  
    constructor(data: any) {
      this.id = data.id;
      this.championid = data.championid;
      this.hp = data.hp;
      this.hpperlevel = data.hpperlevel;
      this.mp = data.mp;
      this.mpperlevel = data.mpperlevel;
      this.movespeed = data.movespeed;
      this.armor = data.armor;
      this.armorperlevel = data.armorperlevel;
      this.spellblock = data.spellblock;
      this.spellblockperlevel = data.spellblockperlevel;
      this.attackrange = data.attackrange;
      this.hpregen = data.hpregen;
      this.hpregenperlevel = data.hpregenperlevel;
      this.mpregen = data.mpregen;
      this.mpregenperlevel = data.mpregenperlevel;
      this.crit = data.crit;
      this.critperlevel = data.critperlevel;
      this.attackdamage = data.attackdamage;
      this.attackdamageperlevel = data.attackdamageperlevel;
      this.attackspeedperlevel = data.attackspeedperlevel;
      this.attackspeed = data.attackspeed;
    }
  }
  