import CharacterTable from "./CharacterTable";
import './Characters.css';
import { useDispatch } from "react-redux";
import { addNewCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { useNavigate } from "react-router-dom";
import { Skill, SkillProficiency } from "../../Components/CharacterSheet/CharacterUtils";

function Characters(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToNewCharacter = (id : number) => {
    navigate(`${id}`, {replace: true})
  } 

  return (
  <>
    <button onClick={() => {
      dispatch(
        addNewCharacter(
          {name: "New Character", skills: [
            {skill: Skill.ACROBATICS, proficiency: SkillProficiency.NONE},
            {skill: Skill.ANIMAL_HANDLING, proficiency: SkillProficiency.NONE},
            {skill: Skill.ARCANA, proficiency: SkillProficiency.NONE},
            {skill: Skill.ATHLETICS, proficiency: SkillProficiency.NONE},
            {skill: Skill.DECEPTION, proficiency: SkillProficiency.NONE},
            {skill: Skill.HISTORY, proficiency: SkillProficiency.NONE},
            {skill: Skill.INSIGHT, proficiency: SkillProficiency.NONE},
            {skill: Skill.INTIMIDATION, proficiency: SkillProficiency.NONE},
            {skill: Skill.INVESTIGATION, proficiency: SkillProficiency.NONE},
            {skill: Skill.MEDICINE, proficiency: SkillProficiency.NONE},
            {skill: Skill.NATURE, proficiency: SkillProficiency.NONE},
            {skill: Skill.PERCEPTION, proficiency: SkillProficiency.NONE},
            {skill: Skill.PERFORMANCE, proficiency: SkillProficiency.NONE},
            {skill: Skill.PERSUASION, proficiency: SkillProficiency.NONE},
            {skill: Skill.RELIGION, proficiency: SkillProficiency.NONE},
            {skill: Skill.SLEIGHT_OF_HAND, proficiency: SkillProficiency.NONE},
            {skill: Skill.STEALTH, proficiency: SkillProficiency.NONE},
            {skill: Skill.SURVIVAL, proficiency: SkillProficiency.NONE},]}
          , navigateToNewCharacter
          ))}}
      >New Character</button>
    <CharacterTable />
  </>);
}

export default Characters;
