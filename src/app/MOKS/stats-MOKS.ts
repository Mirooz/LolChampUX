import { Stats } from "../champion/model/stats";

export const STATS_MOCKS: Stats[] = [
  {
    id: 1,
    championid: 'champion1',
    hp: 500,
    hpperlevel: 80,
    mp: 350,
    mpperlevel: 55,
    movespeed: 335,
    armor: 20,
    armorperlevel: 3.5,
    spellblock: 30,
    spellblockperlevel: 0.5,
    attackrange: 150,
    hpregen: 6,
    hpregenperlevel: 0.8,
    mpregen: 8,
    mpregenperlevel: 0.7,
    crit: 0,
    critperlevel: 0,
    attackdamage: 60,
    attackdamageperlevel: 3,
    attackspeedperlevel: 2,
    attackspeed: 0.625,
  },
  {
    id: 2,
    championid: 'champion2',
    hp: 475,
    hpperlevel: 85,
    mp: 375,
    mpperlevel: 60,
    movespeed: 325,
    armor: 18,
    armorperlevel: 3,
    spellblock: 32,
    spellblockperlevel: 0.5,
    attackrange: 175,
    hpregen: 5,
    hpregenperlevel: 0.7,
    mpregen: 8,
    mpregenperlevel: 0.75,
    crit: 0,
    critperlevel: 0,
    attackdamage: 58,
    attackdamageperlevel: 3.2,
    attackspeedperlevel: 2.5,
    attackspeed: 0.625,
  },
];