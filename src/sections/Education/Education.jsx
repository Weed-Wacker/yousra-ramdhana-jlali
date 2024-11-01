import styles from "./EducationStyles.module.css";

function Education() {
  return (
    <section id="education" className={styles.container}>
      <div id="panel" className={styles.panel}>
        <h1 className="sectionTitle">Education</h1>
        <h3>Completed</h3>
        <div className={styles.educationList}>
          <ul>
            <li>
              Blekinge Institute of Technology
              <ul>
                <li>Bachelor's degree in Game Programming, 180 hp</li>
                <li>Master's degree in Computer Science, 120 hp</li>
                <li>Game Development - 3D Modeling, 7.5 hp</li>
                <li>Game Development - Character Modeling, 7.5 hp</li>
              </ul>
            </li>
            <li>
              University of Gothenburg
              <ul>
                <li>
                  Sketching and visualization techniques in design, 7.5 hp
                </li>
              </ul>
            </li>
            <li>
              University of Gävle
              <ul>
                <li>
                  3D modeling and animation in an Open Source environment, 7.5
                  hp
                </li>
              </ul>
            </li>
            <li>
              West University
              <ul>
                <li>Game development in 3D environment, 7.5 hp</li>
              </ul>
            </li>
            <li>
              Luleå University of Technology
              <ul>
                <li>Computer game production, 7.5 hp</li>
                <li>Game design, 7.5 hp</li>
                <li>Digital Painting and idea generation, 7.5 hp</li>
              </ul>
            </li>
            <li>
              Malmö University
              <ul>
                <li>Narrative design, 15 hp</li>
              </ul>
            </li>
            <li>
              Uppsala University
              <ul>
                <li>Digital sculpting for games 1, 7.5 hp</li>
                <li>Digital sculpting for games 2, 7.5 hp</li>
              </ul>
            </li>
            <li>
              Udemy Certificated Courses
              <ul>
                <li>
                  <a
                    href="https://www.udemy.com/course/learn-the-art-of-level-design-part-1/?couponCode=ACCAGE0923"
                    target="_blank"
                  >
                    Learn the ART of Level Design
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h3>Learning Objectives</h3>
        <div className={styles.educationList}>
          <ul>
            <li>Unreal Engine 5</li>
            <li>Multiplayer Gameplay</li>
            <li>HTML CSS JS</li>
            <li>React</li>
            <li>Node</li>
            <li>
              Umeå University
              <ul>
                <li>
                  Music creation for Film, Computer games and Theatre, 7.5 hp
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
