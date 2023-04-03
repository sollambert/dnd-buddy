
export enum Race { HUMAN, ELF, DWARF, GNOME, HALFLING, HALF_ORC, HALF_ELF }

export enum Profession { BARD, CLERIC, DRUID, FIGHTER, RANGER, WIZARD, SORCEROR, PALADIN }

export default class Character {
  id: number;
  name: string;
  level: number;
  race: Race;
  profession: Profession;
  str: number | undefined;
  dex: number | undefined;
  con: number | undefined;
  int: number | undefined;
  wis: number | undefined;
  cha: number | undefined;
  [key: string]: any;

  constructor(
    id: number,
    name: string,
    level: number,
    race: Race,
    profession: Profession,
    str: number | undefined,
    dex: number | undefined,
    con: number | undefined,
    int: number | undefined,
    wis: number | undefined,
    cha: number | undefined
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.race = race;
    this.profession = profession;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}