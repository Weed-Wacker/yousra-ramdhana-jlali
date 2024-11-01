import styles from "./SkillsStyles.module.css";
import checkmarkDark from "../../assets/checkmark-dark.svg";
import checkmarkLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";
import SkillList from "../../common/SkillList";

function Skills() {
  const { theme } = useTheme();

  const checkmarkIcon = theme === "light" ? checkmarkLight : checkmarkDark;

  return (
    <section id="skills" className={styles.container}>
      <div id="panel" className={styles.panel}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="C++" />
          <SkillList src={checkmarkIcon} skill="C#" />
          <SkillList src={checkmarkIcon} skill="OOP" />
          <SkillList src={checkmarkIcon} skill="Git" />
          <SkillList src={checkmarkIcon} skill="Unity" />
          <SkillList src={checkmarkIcon} skill="OpenGL" />
          <SkillList src={checkmarkIcon} skill="Game Development" />
          <SkillList src={checkmarkIcon} skill="Debugging" />
          <SkillList src={checkmarkIcon} skill="Jenkins" />
          <SkillList src={checkmarkIcon} skill="CI/CD" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="Maya" />
          <SkillList src={checkmarkIcon} skill="ZBrush" />
          <SkillList src={checkmarkIcon} skill="Blender" />
          <SkillList src={checkmarkIcon} skill="Substance Painter" />
          <SkillList src={checkmarkIcon} skill="Concept Art" />
          <SkillList src={checkmarkIcon} skill="3D Modeling/Sculpting" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="Team Collaboration" />
          <SkillList
            src={checkmarkIcon}
            skill="Cross-Functional Collaboration"
          />
          <SkillList src={checkmarkIcon} skill="Scrum" />
          <SkillList src={checkmarkIcon} skill="Agile Project Management" />
          <SkillList src={checkmarkIcon} skill="Remote Work" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="English" />
          <SkillList src={checkmarkIcon} skill="Swedish" />
          <SkillList src={checkmarkIcon} skill="French" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
