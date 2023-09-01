import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export function Design() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        //   background: {
        //     color: {
        //       value: "#0d47a1",
        //     },
        //   },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
            //   value: "#ffffff",
              value: "#9abaff",
            },
            links: {
            //   color: "#ffffff",
              color: "#95acff",
            //   distance: 150,
              distance: 118,
              enable: true,
            //   opacity: 0.5,
              opacity: .15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
            //   value: 0.5,
              value: 0.05,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
  );
}
