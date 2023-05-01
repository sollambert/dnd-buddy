
export enum Race { HUMAN, ELF, DWARF, GNOME, HALFLING, HALF_ORC, HALF_ELF }

export enum Profession { BARD, CLERIC, DRUID, FIGHTER, RANGER, ROGUE, WIZARD, SORCEROR, PALADIN }

export default class Character {
  id: number;
  name: string;
  level: number;
  race: Race;
  profession: Profession;
  strength: number | undefined;
  dexterity: number | undefined;
  constitution: number | undefined;
  intelligence: number | undefined;
  wisdom: number | undefined;
  charisma: number | undefined;
  [key: string]: any;

  constructor(
    id: number,
    name: string,
    level: number,
    race: Race,
    profession: Profession,
    strength?: number | undefined,
    dexterity?: number | undefined,
    constitution?: number | undefined,
    intelligence?: number | undefined,
    wisdom?: number | undefined,
    charisma?: number | undefined
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.race = race;
    this.profession = profession;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }
}