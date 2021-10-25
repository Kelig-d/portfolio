const ParticlesConfig = {
    particles: {
        number: {
            value: 10,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 5,
                color: "#000000"
            },
            polygon: {
                nb_sides: 3
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 100,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                size_min: 50,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 0,
            color: "#ffffff",
            opacity: 0,
            width: 0
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    retina_detect: false
};

export default ParticlesConfig;