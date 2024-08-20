document.addEventListener("DOMContentLoaded", () => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Add custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Array of colors to cycle through
    const colors = ['#ff8a00', '#e52e71', '#9b00e8', '#00f0ff'];
    let currentColorIndex = 0;

    // Function to change color
    function changeColor() {
        cursor.style.background = `${colors[currentColorIndex]}99`;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change color periodically
    setInterval(changeColor, 5000);

    // Fade-in effect for hero content and image
    gsap.fromTo(".hero-content", 
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
    );

    gsap.fromTo(".hero-image", 
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Parallax effect for hero section
    gsap.to(".container", {
        scale: 1.2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true
        }
    });

    // Fade-in effect for About Me section
    gsap.fromTo(".about-me", 
        { opacity: 0, scale: 0.9, y: 100 },
        { opacity: 1, scale: 1, y: 0, 
          scrollTrigger: {
              trigger: ".about-me",
              start: "top 75%",
              end: "top 25%",
              scrub: true
          }
        }
    );

    // Fade-out effect for About Me section
    gsap.to(".about-me", {
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: ".about-me",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true
        }
    });

    // Fade-in effect for Education section
    gsap.fromTo(".education-certification", 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".education-certification",
              start: "top 75%",
              end: "top 25%",
              scrub: true,
              pin: true
          }
        }
    );

    // Fade-in effect for Education Timeline
    gsap.fromTo(".education-timeline", 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".education-timeline",
              start: "top 75%",
              end: "top 25%",
              scrub: true
          }
        }
    );

    // Fade-in effect for Timeline Items
    gsap.fromTo(".timeline-item", 
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0,
          scrollTrigger: {
              trigger: ".timeline-item",
              start: "top center",
              end: "bottom top",
              scrub: true
          },
          stagger: 0.2
        }
    );

    // Fade-in and fade-out effects for Certificates section
    gsap.fromTo(".certificates", 
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".certificates",
              start: "top 75%",
              end: "top 25%",
              scrub: true
          }
        }
    );

    gsap.to(".certificates", 
        { opacity: 0, y: -100,
          scrollTrigger: {
              trigger: ".certificates",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
        }
    );

    // Fade-in effect for Certificate items
    gsap.fromTo(".certificate-item", 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".certificates",
              scrub: true
          },
          stagger: 0.2
        }
    );

    // Fade-in effect for Footer
    gsap.fromTo(".footer-container", 
        { opacity: 0, scale: 0.9, y: 100 },
        { opacity: 1, scale: 1, y: 0,
          scrollTrigger: {
              trigger: ".footer-container",
              start: "top 75%",
              end: "top 25%",
              scrub: true
          }
        }
    );
});
