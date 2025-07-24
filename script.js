/**
 * Script Purpose: Website functionality
 * Author: Lalit Yadav
 * Version: 1.1
 * Created: 24 june 2025
 * Last Updated: 2 July 2025
 */

console.log("Custom Script");

function initHeroSlider() {
  const splide = new Splide("#hero-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    resetProgress: false,
    pagination: false,
  });

  const slides = document.querySelectorAll(".splide__slide");

  const timelines = Array.from(slides).map((slide) => {
    const tl = gsap.timeline({ paused: true });

    const heading = slide.querySelector("h1");
    const paragraph = slide.querySelector("p");
    const button = slide.querySelector("button");

    if (heading) {
      tl.from(heading, { y: 60, opacity: 0, duration: 1 });
    }
    if (paragraph) {
      tl.from(paragraph, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6");
    }
    if (button) {
      tl.from(button, { y: 20, opacity: 0, duration: 0.6 }, "-=0.5");
    }

    return tl;
  });

  splide.on("mounted move", () => {
    timelines.forEach((tl) => tl.pause().progress(0));
    timelines[splide.index].play();
  });

  splide.mount();

  // Hide arrows on tablet and below
  if (window.innerWidth <= 991) {
    const arrows = document.querySelector(".splide__arrows");
    if (arrows) {
      arrows.style.display = "none";
    }
  }
}

function initFrontSlider(autoScroll) {
  new Splide("#splide-front", {
    type: "loop",
    // drag: 'free',
    focus: "center",
    direction: "rtl",
    arrows: false,
    pagination: false,
    perPage: 4,
    autoScroll: {
      speed: 4, // Left to right
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    autoWidth: true,
    gap: "2rem",
  }).mount({ AutoScroll: autoScroll });
}

function initBackSlider(autoScroll) {
  new Splide("#splide-back", {
    type: "loop",
    // drag: 'free',
    focus: "center",
    arrows: false,
    pagination: false,
    perPage: 4,
    autoScroll: {
      speed: 2, // Right to left
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    autoWidth: true,
    gap: "2rem",
  }).mount({ AutoScroll: autoScroll });
}

function initTestimonialSlider() {
  const slider = new Splide("#testimonial-slider", {
    type: "loop",
    autoplay: true,
    focus: 0,
    perPage: 3,
    gap: "1rem",
    pagination: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  });

  slider.mount();
}
