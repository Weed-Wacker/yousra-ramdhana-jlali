import { useRef, useEffect } from "react";
import styles from "./BackgroundStyles.module.css";

function Background() {
  const canvasRef = useRef(null);
  let particleArray = [];
  const animationSpeed = 0.1; // Control the speed of the animation

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80)
    };

    // Add mousemove event listener
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    // Add resize event listener
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      initializeParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fill();
      }

      update() {
        // Bounds and collision checks
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          this.x += (dx > 0 ? -10 : 10) * animationSpeed;
          this.y += (dy > 0 ? -10 : 10) * animationSpeed;
        }

        // Update particle position based on animation speed
        this.x += this.directionX * animationSpeed;
        this.y += this.directionY * animationSpeed;
        this.draw();
      }
    }

    function initializeParticles() {
      particleArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 5) + 1;
        const x = Math.random() * (canvas.width - size * 2) + size * 2;
        const y = Math.random() * (canvas.height - size * 2) + size * 2;
        const directionX = (Math.random() * 5) - 2.5;
        const directionY = (Math.random() * 5) - 2.5;
        const color = "rgba(255, 0, 0, 1)";
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connectParticles() {
      let opacityValue = 1;

      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x)) + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            context.strokeStyle = "rgba(0, 0, 0, " + opacityValue + ")";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particleArray[a].x, particleArray[a].y);
            context.lineTo(particleArray[b].x, particleArray[b].y);
            context.stroke();
          }
        }
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particleArray.forEach(particle => particle.update());
      connectParticles();
      requestAnimationFrame(animate);
    }

    initializeParticles();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="Background" className={styles.container}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Background;
