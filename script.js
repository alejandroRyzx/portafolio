document.addEventListener('DOMContentLoaded', () => {
    // Inicializar particles.js
    if (typeof particlesJS === 'function') {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: ["#00ffff", "#ff00ff", "#ffff00"],
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                    },
                },
                line_linked: {
                    enable: false,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                },
            },
            retina_detect: true,
        });
        console.log('particles.js inicializado correctamente');
    } else {
        console.error('particlesJS no está disponible. Verifica el CDN.');
    }

    // Script para el menú hamburguesa
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav.nav ul');
    const navClose = document.querySelector('.nav-close');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    if (navToggle && navMenu && navClose && overlay && body) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        });

        overlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    } else {
        console.error('Algún elemento del menú no fue encontrado:', { navToggle, navMenu, navClose, overlay, body });
    }

    // Control del comportamiento del nav y animación de "Sobre mí"
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav.nav');
        const hero = document.querySelector('.hero');
        const floatingIcons = document.querySelector('.floating-icons');
        const htmlIcon = document.querySelector('.floating-icons img[alt="Monitor"]');
        const sobreMi = document.querySelector('.sobre-mi');

        if (!nav || !hero || !floatingIcons || !htmlIcon || !sobreMi) {
            console.error('Elementos no encontrados:', { nav, hero, floatingIcons, htmlIcon, sobreMi });
            return;
        }

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calcular la posición del ícono de HTML5 sumando los offsetTop de sus contenedores
        const heroTop = hero.offsetTop;
        const floatingIconsTop = floatingIcons.offsetTop;
        const htmlIconTopRelative = htmlIcon.offsetTop;
        const htmlIconTop = heroTop + floatingIconsTop + htmlIconTopRelative;

        // Ocultar nav cuando el scroll alcance el ícono de HTML5
        if (scrollPosition >= htmlIconTop) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
            nav.classList.remove('visible');
        }

        // Animación de "Sobre mí" al entrar en vista
        const sobreMiContent = document.querySelector('.sobre-mi-content');
        const sobreMiSidebar = document.querySelector('.sobre-mi-sidebar');
        const sobreMiTop = sobreMi.offsetTop;
        if (sobreMiContent && sobreMiSidebar && scrollPosition + windowHeight > sobreMiTop) {
            sobreMiContent.classList.add('visible');
            sobreMiSidebar.classList.add('visible');
        }
    });

    // Verificar que el evento scroll se está ejecutando
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const floatingIcons = document.querySelector('.floating-icons');
        const htmlIcon = document.querySelector('.floating-icons img[alt="Monitor"]');
        let htmlIconTop = 'No encontrado';
        if (hero && floatingIcons && htmlIcon) {
            const heroTop = hero.offsetTop;
            const floatingIconsTop = floatingIcons.offsetTop;
            const htmlIconTopRelative = htmlIcon.offsetTop;
            htmlIconTop = heroTop + floatingIconsTop + htmlIconTopRelative;
        }
        console.log('Evento scroll activado, scrollPosition:', window.scrollY, 'htmlIconTop:', htmlIconTop);
    });

    // Función para desplazamiento suave con ajuste de la altura del nav
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav.nav').offsetHeight; // Altura del nav
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight; // Ajuste
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});