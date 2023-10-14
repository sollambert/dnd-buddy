import { Dice } from "../@types/global";

export function screamingSnakeToReadable(text: string) {
    let split = text.split("_");
    for (let index in split) {
        let word = split[index].toLocaleLowerCase();
        let newWord = "";
        for (let i = 0; i < word.length; i ++) {
            i == 0 ? newWord += word[i].toLocaleUpperCase() : newWord += word[i];
        }
        split[index] = newWord;
    }
    return split.join(" ");
}

export function rollDie(sides: number) {
    return Math.floor(Math.random() * sides) + 1;
}

export function parseDice(diceString: string) {
    let diceSplit = diceString.split("+");
    let orderedDice: Dice = diceSplit
    .map((die) => {
        let split = die.toLowerCase().split("d");
        return {quantity: Number(split[0]), sides: Number(split[1])}
    })
    .sort((d1, d2) => {
        return d2.sides - d1.sides
    });
    return orderedDice;
}

export const calcAbilityBonus = (abilityScore: number) => {
    let bonus = Math.floor((abilityScore - 10) / 2);
    return bonus;
}

export function rollDice(dice: Dice, bonus?: number) {
    let total = 0;
    for (let die of dice) {
        for (let i = 0; i < die.quantity; i ++) {
            total += rollDie(die.sides);
        }
    }
    return bonus ? total + bonus : total;
}

export function calcMaxHP(dice: Dice, bonus: number) {
    let total = dice[0].sides + bonus;
    for (let i = 0; i < dice.length; i ++) {
        for (let j = 0; j < dice[i].quantity; j++) {
            if (i != 0 || j != 0) {
                total += Math.floor((dice[i].sides) / 2) + 1 + bonus;
            }
        }
    }
    return total;
}