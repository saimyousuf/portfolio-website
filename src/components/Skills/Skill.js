import ProgressBar from "./ProgressBar";
import "./Skill.css";
export default function Skill({ iconSrc, skillName, progress }) {
  return (
    <>
      <div className="container">
        <img src={iconSrc} />
        <div className="skill-name">{skillName}</div>
        <ProgressBar progress={progress} />
      </div>
    </>
  );
}
