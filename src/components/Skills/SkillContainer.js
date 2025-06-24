import Skill from "./Skill";
import "./Skill.css";
import { skills } from "./SkillData";
export default function SkillContainer() {
  return (
    <div className="skillsContainer">
      <h1 className="heading">Skills 💡</h1>
      <div className="SkillColumn">
        {skills.map((skill) => (
          <Skill
            iconSrc={skill.icon}
            skillName={skill.name}
            progress={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}
