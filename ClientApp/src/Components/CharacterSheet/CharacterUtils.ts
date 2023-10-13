export function levelFromExperience(experience : number) {
    return experience < 300 ? 1 :
        experience < 900 ? 2 :
        experience < 2700 ? 3 :
        experience < 6500 ? 4 :
        experience < 14000 ? 5 :
        experience < 23000 ? 6 :
        experience < 34000 ? 7 :
        experience < 48000 ? 8 :
        experience < 64000 ? 9 :
        experience < 85000 ? 10 :
        experience < 100000 ? 11 :
        experience < 120000 ? 12 :
        experience < 140000 ? 13 :
        experience < 165000 ? 14 :
        experience < 195000 ? 15 :
        experience < 225000 ? 16 :
        experience < 265000 ? 17 :
        experience < 305000 ? 18 :
        experience < 355000 ? 19 : 20
}