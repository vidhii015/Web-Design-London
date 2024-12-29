gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    gsap.from(".about-us-section .about-us-info", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".about-us-section .about-us-info",
        start: "top 80%",
      },
    });

    gsap.from(".projects-section .title, .projects-section button", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
      scrollTrigger: ".projects-section .title, .projects-section button",
    });

    gsap.from(".brand-design-team .brand-design-team-info", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".brand-design-team .brand-design-team-info",
        start: "top 80%",
      },
    });

    gsap.from(".our-services .title", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
      scrollTrigger: ".our-services .title",
    });

    gsap.from(".our-services .web-design .web-design-info .content", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".our-services .web-design .web-design-info .content",
        start: "top 80%",
      },
    });

    gsap.from(".our-services .web-design .web-design-info video", {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".our-services .web-design .web-design-info video",
        start: "top 80%",
      },
    });

    gsap.from(".our-bespoke-website .title", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".our-bespoke-website .title",
    });

    gsap.from(".our-process .our-process-info", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".our-process .our-process-info",
    });

    gsap.from(".our-process .process", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".our-process .process",
    });

    gsap.from(".our-news .title", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".our-news .title",
    });

    gsap.from(".cost-calculator", {
      y: -70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".cost-calculator",
    });

    gsap.from(".contact-us", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".contact-us",
    });

    gsap.from("footer .footer-top .accreditation", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".footer-top",
    });

    gsap.from("footer .footer-top .quick-links", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".footer-top",
    });
  }
}

runGsap();
