import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import { screamingSnakeToReadable } from "../../Utils/global";
import { SkillProficiency } from "./CharacterUtils";

type Props = {
    character: Character,
    className?: string,
    setCharacter: Dispatch<SetStateAction<Character>>,
}

function inputHandler(character: Character, index: number, proficiency: SkillProficiency, setCharacter: Dispatch<SetStateAction<Character>>) {
    console.log(character);
    if (character.skills) {
        character.skills[index].proficiency = proficiency;
    }
    setCharacter(character);
}

export default function CSSkills(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="flex flex-col items-start">
            {props.character.skills?.map((skill, i) => {
                return (
                <div key={i + skill.proficiency} className="flex flex-row">
                    <input
                        type="radio"
                        onChange={() => inputHandler(props.character, i, SkillProficiency.NONE, props.setCharacter)}
                        checked={skill.proficiency === SkillProficiency.NONE}
                        name={`PROF-${skill.skill.toLocaleString()}`}
                    />
                    <input
                        type="radio"
                        onChange={() => inputHandler(props.character, i, SkillProficiency.PROFICIENT, props.setCharacter)}
                        checked={skill.proficiency === SkillProficiency.PROFICIENT}
                        name={`PROF-${skill.skill.toLocaleString()}`}
                    />
                    <input
                        type="radio"
                        onChange={() => inputHandler(props.character, i, SkillProficiency.EXPERT, props.setCharacter)}
                        checked={skill.proficiency === SkillProficiency.EXPERT}
                        name={`PROF-${skill.skill.toLocaleString()}`}
                    />
                    <p className="ml-2">{screamingSnakeToReadable(skill.skill.toLocaleString()) + " " + skill.proficiency}</p>
                </div>)
            })}
        </div>
    )
}