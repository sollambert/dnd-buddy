
export enum Race { DWARF, ELF, GNOME, HALF_ORC, HALF_ELF, HALFLING, HUMAN, TIEFLING }

export enum Profession {BARBARIAN, BARD, CLERIC, DRUID, FIGHTER, MONK, PALADIN, RANGER, ROGUE, SORCEROR, WARLOCK, WIZARD }

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
  background: string | undefined;
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
    charisma?: number | undefined,
    background?: string | undefined
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
    this.background = background ? background : ''
  }
}