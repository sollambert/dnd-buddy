import { PropsWithChildren, useEffect, useState } from "react";
import { Character } from "../../@types/global";
import { screamingSnakeToReadable } from "../../Utils/global";
import { CharacterSkill, Skill, SkillProficiency } from "./CharacterUtils";
import { calcProficiency } from "./CSProficiency";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../Redux/ActionCreators/character.action.creators";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
}

function calcSkillBonus(character: Character, skill: CharacterSkill) {
    let abilityBonus = getAbilityBonusBySkill(character, skill.skill);
    let profBonus = calcProficiency(character);
    switch (skill.proficiency) {
        case "PROFICIENT": {
            abilityBonus[1] += profBonus;
            break;
        }
        case "EXPERT": {
            abilityBonus[1] += profBonus * 2;
            break;
        }
    }
    return abilityBonus;
}

function getAbilityBonusBySkill(character: Character, skill: Skill) {
    let bonus: [string, number] = ["None", 0];
    if (character.strength
        && character.dexterity
        && character.constitution
        && character.intelligence
        && character.wisdom
        && character.charisma) {
        switch (skill.toLocaleString()) {
            case "ATHLETICS": {
                bonus = ["Str", Math.floor((character.strength - 10) / 2)]
                break;
            }
            case "ACROBATICS":
            case "SLEIGHT_OF_HAND":
            case "STEALTH": {
                bonus = ["Dex", Math.floor((character.dexterity - 10) / 2)]
                break;
            }
            case "ARCANA":
            case "HISTORY":
            case "INVESTIGATION":
            case "NATURE":
            case "RELIGION": {
                bonus = ["Int", Math.floor((character.intelligence - 10) / 2)]
                break;
            }
            case "ANIMAL_HANDLING":
            case "INSIGHT":
            case "MEDICINE":
            case "PERCEPTION":
            case "SURVIVAL": {
                bonus = ["Wis", Math.floor((character.wisdom - 10) / 2)]
                break;
            }
            case "DECEPTION":
            case "INTIMIDATION":
            case "PERFORMANCE":
            case "PERSUASION": {
                bonus = ["Cha", Math.floor((character.charisma - 10) / 2)]
                break;
            }
        }
    }
    return bonus;
}

export default function CSSkills(props: PropsWithChildren<Props>): JSX.Element {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);

    function inputHandler(character: Character, index: number, proficiency: SkillProficiency) {
        console.log(character);
        if (character.skills) {
            character.skills[index].proficiency = proficiency;
            setChecked(character.skills.map((skill) => {
                return skill.proficiency;
            }));
        }
        dispatch(ActionCreators.setCharacter(character));
    }
    
    const [checked, setChecked] = useState(new Array<SkillProficiency>);
    useEffect(() => {
        let newChecked: Array<SkillProficiency> = []
        character.skills?.forEach((skill, i) => {
            newChecked.push(skill.proficiency);
        });
        setChecked(newChecked);
    }, [character]);

    return (
        <div className="flex flex-col items-start border p-1">
            <div className="text-lg m-1">Skills</div>
            <div className="flex flex-row items-center">
                <div className="flex flex-row w-12 justify-evenly">
                    <p>N</p>
                    <p>P</p>
                    <p>E</p>
                </div>
                <p className="mx-2 text-sm">{"(None, Proficient, Expert)"}</p>
            </div>
            <div key="skills-map">
                {character.skills?.map((skill, i) => {
                    let bonus = calcSkillBonus(character, skill);
                    return (
                        <div key={skill.skill} className="flex flex-row items-center">
                            <div className="flex flex-row w-12 justify-evenly">
                                <input
                                    key={`${skill.skill}-${SkillProficiency.NONE}`}
                                    className="w-3"
                                    type="radio"
                                    onChange={() => inputHandler(character, i, SkillProficiency.NONE)}
                                    checked={checked[i] === SkillProficiency.NONE}
                                    name={`PROF-${skill.skill.toLocaleString()}`}
                                />
                                <input
                                    key={`${skill.skill}-${SkillProficiency.PROFICIENT}`}
                                    className="w-3"
                                    type="radio"
                                    onChange={() => inputHandler(character, i, SkillProficiency.PROFICIENT)}
                                    checked={checked[i] === SkillProficiency.PROFICIENT}
                                    name={`PROF-${skill.skill.toLocaleString()}`}
                                />
                                <input
                                    key={`${skill.skill}-${SkillProficiency.EXPERT}`}
                                    className="w-3"
                                    type="radio"
                                    onChange={() => inputHandler(character, i, SkillProficiency.EXPERT)}
                                    checked={checked[i] === SkillProficiency.EXPERT}
                                    name={`PROF-${skill.skill.toLocaleString()}`}
                                />
                            </div>
                            <input
                                readOnly
                                className="w-6 h-6 mx-2 my-1 text-center"
                                value={bonus[1]}
                            />
                            <p>{screamingSnakeToReadable(skill.skill.toLocaleString())} ({bonus[0]})</p>
                        </div>)
                })}
            </div>
        </div>
    )
}