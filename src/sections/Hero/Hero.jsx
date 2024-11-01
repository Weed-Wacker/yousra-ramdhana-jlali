import styles from "./HeroStyles.module.css";
import heroImg from "/profile.jfif";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div id="panel" className={styles.panel}>
        <div>
          <img
            className={styles.hero}
            src={heroImg}
            alt="Profile picture of Yousra Ramdhana Jlali"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Yousra <br />
            Ramdhana <br />
            Jlali
          </h1>
          <h2>Software Engineer</h2>
          <span>
            <a href="https://www.linkedin.com/in/yousra-j/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/Weed-Wacker" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for spreading joy through virtual experiences.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
