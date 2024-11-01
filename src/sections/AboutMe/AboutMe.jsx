import styles from "./AboutMeStyles.module.css";

function AmoutMe() {
  return (
    <section id="aboutMe" className={styles.container}>
      <div id="panel" className={styles.panel}>
        <h1 className="sectionTitle">Amout Me</h1>
        <p className={styles.description}>
          I love games, art, sweets, landscape views, and new experiences. I
          typically spend my spare time watching movies, anime, or reading
          manga. Currently, I'm rewatching Naruto!
        </p>
      </div>
    </section>
  );
}

export default AmoutMe;
