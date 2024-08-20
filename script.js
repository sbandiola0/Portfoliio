document.addEventListener("DOMContentLoaded", () => {
    // Initializing GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in effect for hero content and image
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    heroContent.style.opacity = 0;
    heroImage.style.opacity = 0;

    window.addEventListener('load', () => {
        heroContent.style.animation = 'slideInLeft 1s ease forwards';
        heroImage.style.animation = 'slideInRight 1s ease forwards';
    });

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
              scrub: true,
              onEnter: () => document.querySelector('.about-me').classList.add('visible')
          }
        }
    );

    // Fade-out effect for About Me section
    gsap.to(".about-me",
        { opacity: 0, y: -100,
          scrollTrigger: {
              trigger: ".about-me",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
        }
    );

    // Fade-in effect for Education section
    gsap.fromTo(".education-certification",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".education-certification",
              start: "top 75%",
              end: "top 25%",
              scrub: true,
              onEnter: () => document.querySelector('.education-certification').classList.add('visible')
          }
        }
    );

    // Fade-out effect for Education section
    gsap.to(".education-certification",
        { opacity: 0, y: -100,
          scrollTrigger: {
              trigger: ".education-certification",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
        }
    );

    // Fade-in effect for Education timeline
    gsap.fromTo(".education-timeline",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".education-timeline",
              start: "top 75%",
              end: "top 25%",
              scrub: true,
              onEnter: () => document.querySelector('.education-timeline').classList.add('visible')
          }
        }
    );

    // Fade-out effect for Education timeline
    gsap.to(".education-timeline",
        { opacity: 0, y: -100,
          scrollTrigger: {
              trigger: ".education-timeline",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
        }
    );

    // Timeline items animation - appear one by one after the Education section
    gsap.fromTo(".timeline-item",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0,
          scrollTrigger: {
              trigger: ".education-timeline",
              start: "top center",
              end: "bottom top",
              scrub: true,
              // Ensure timeline items animate after .education-timeline is visible
          },
          stagger: 0.2, // Stagger items by 0.2s
          delay: 0.5
        }
    );

    // Fade-in effect for Certificates section
     // Fade-in and fade-out effects for Certificates section
     gsap.fromTo(".certificates",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0,
          scrollTrigger: {
              trigger: ".certificates",
              start: "top 75%",
              end: "top 25%",
              scrub: true,
              onEnter: () => document.querySelector('.certificates').classList.add('visible')
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
              start: "top 75%",
              end: "top 25%",
              scrub: true,
          },
          stagger: 0.2
        }
    );

});
