
enum Race {}

enum Profession {}

export default class Character {
  name: string;
  level: number;
  race: string;
  profession: string;
  str: number | undefined;
  dex: number | undefined;
  con: number | undefined;
  int: number | undefined;
  wis: number | undefined;
  cha: number | undefined;
  [key: string]: any;

  constructor(
    name: string,
    level: number,
    race: string,
    profession: string,
    str: number | undefined,
    dex: number | undefined,
    con: number | undefined,
    int: number | undefined,
    wis: number | undefined,
    cha: number | undefined
  ) {
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