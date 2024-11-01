import styles from "./ProjectsStyles.module.css";
import cryptids from "../../assets/cryptids.png";
import characterSculpt from "../../assets/firstCharacterSculpt.jpg";
import characterSculpt2 from "../../assets/Sharkman Signed.png";
import environmentArt from "../../assets/EnvironmentArt1.png";
import lowPolyWoodenChairRender from "../../assets/LowPolyWoodenChair.mp4";
import mlKartRace from "../../assets/Self-Driven ML Karts - Jan 2022.mp4";
import flourSackAnimation from "../../assets/flourSackAnimation.mp4";
import characterArtProcreate from "../../assets/CharacterArt.png";
import bunkerThumbnail from "../../assets/BunkerThumbnail.png";
import bunkerLevelDemo from "../../assets/Bunker Demo.mp4";
import foliagePainting from "../../assets/FoliagePainting.png";
import ProjectCardWrapper from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <div id="panel" className={styles.panel}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCardWrapper
            isVideo={false}
            src={cryptids}
            link="https://gamejolt.com/games/Cryptids/637147"
            h3="Horror Game: CRYPTIDS"
            p="Unity, C#, IGDA Summer Game Jam 2021 Winner"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={environmentArt}
            link={environmentArt}
            h3="Envionment Art"
            p="Maya, Substance Painter, UE5, 3D Modeling, UV Unwrap, PBR Material"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={bunkerThumbnail}
            link={bunkerLevelDemo}
            h3="Level Design"
            p="Maya, UE5, 3D Modeling"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={characterSculpt}
            link={characterSculpt}
            h3="First Character Concept Scult"
            p="Zbrush, Sculpting, Vertex Paint"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={characterSculpt2}
            link={characterSculpt2}
            h3="Character Concept Scult"
            p="Zbrush, Blender, Sculpting, Vertex Paint, Rigging, Simulation, Compositing"
          />

          <ProjectCardWrapper
            isVideo={true}
            src={mlKartRace}
            link={mlKartRace}
            h3="Kart Race Game with ML Bots"
            p="Unity, C#, ML Plugin, Level Design, Self-Driven Bots"
          />

          <ProjectCardWrapper
            isVideo={true}
            src={lowPolyWoodenChairRender}
            link={lowPolyWoodenChairRender}
            h3="Low Poly Wooden Chair"
            p="Maya, Procreate, 3D Modeling, UV Unwrap, Handpainted Textures"
          />

          <ProjectCardWrapper
            isVideo={true}
            src={flourSackAnimation}
            link={flourSackAnimation}
            h3="3D Animation"
            p="Blender, Modeling, Rigging, 3D Animation"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={characterArtProcreate}
            link={characterArtProcreate}
            h3="Character Art"
            p="Procreate"
          />

          <ProjectCardWrapper
            isVideo={false}
            src={foliagePainting}
            link={foliagePainting}
            h3="Foliage"
            p="Photoshop"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
