import React from "react";
import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.Card}>
      <a href={link} target="_blank">
        <div className={styles.CardImagery}>
          <img className={styles.Hover} src={src} alt={`${h3} logo`} />
        </div>
        <div className={styles.CardDescription}>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
      </a>
    </div>
  );
}

function ProjectCardVideo({ src, link, h3, p }) {
  return (
    <div className={styles.Card}>
      <a href={link} target="_blank">
        <div className={styles.CardImagery}>
          <video className={styles.Hover} autoPlay loop muted>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.CardDescription}>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
      </a>
    </div>
  );
}

// Wrapper Component
const ProjectCardWrapper = ({ isVideo, ...props }) => {
  return isVideo ? <ProjectCardVideo {...props} /> : <ProjectCard {...props} />;
};

// Export the wrapper
export default ProjectCardWrapper;
