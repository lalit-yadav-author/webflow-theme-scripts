/**
 * Script Purpose: Website functionality
 * Author: Lalit Yadav
 * Version: 1.1
 * Created: 24 june 2025
 * Last Updated: 2 July 2025
 */

function initHeroSlider() {
  const sliderEl = document.querySelector("#hero-slider");
  if (!sliderEl) return;

  const splide = new Splide(sliderEl, {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    resetProgress: false,
    pagination: false,
  });

  const slides = sliderEl.querySelectorAll(".splide__slide");

  const timelines = Array.from(slides).map((slide) => {
    const tl = gsap.timeline({ paused: true });

    const heading = slide.querySelector("h1");
    const paragraph = slide.querySelector("p");
    const button = slide.querySelector("button");

    if (heading) tl.from(heading, { y: 60, opacity: 0, duration: 1 });
    if (paragraph) tl.from(paragraph, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6");
    if (button) tl.from(button, { y: 20, opacity: 0, duration: 0.6 }, "-=0.5");

    return tl;
  });

  splide.on("mounted move", () => {
    timelines.forEach((tl) => tl.pause().progress(0));
    timelines[splide.index].play();
  });

  splide.mount();

  if (window.innerWidth <= 991) {
    const arrows = sliderEl.querySelector(".splide__arrows");
    if (arrows) {
      arrows.style.display = "none";
    }
  }
}

function initFrontSlider(autoScroll) {
  const el = document.querySelector("#splide-front");
  if (!el) return;

  new Splide(el, {
    type: "loop",
    focus: "center",
    direction: "rtl",
    arrows: false,
    pagination: false,
    perPage: 4,
    autoScroll: {
      speed: 4,
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    autoWidth: true,
    gap: "2rem",
  }).mount({ AutoScroll: autoScroll });
}

function initBackSlider(autoScroll) {
  const el = document.querySelector("#splide-back");
  if (!el) return;

  new Splide(el, {
    type: "loop",
    focus: "center",
    arrows: false,
    pagination: false,
    perPage: 4,
    autoScroll: {
      speed: 2,
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    autoWidth: true,
    gap: "2rem",
  }).mount({ AutoScroll: autoScroll });
}

function initTestimonialSlider() {
  const el = document.querySelector("#testimonial-slider");
  if (!el) return;

  new Splide(el, {
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
  }).mount();
}

function initFeedbackSlider() {
  const el = document.querySelector("#testimonial-slider-feedback");
  if (!el) return;

  new Splide(el, {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 2000,
    speed: 800,
    arrows: true,
    pagination: false,
    breakpoints: {
      1024: { perPage: 1 },
      768: { perPage: 1 },
    },
  }).mount();
}

function initLogoSlider() {
  const el = document.querySelector("#logo-slider");
  if (!el) return;

  new Splide(el, {
    type: "loop",
    perPage: 4,
    gap: "2rem",
    arrows: false,
    pagination: false,
    drag: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      991: { perPage: 3 },
      767: { perPage: 2 },
      480: { perPage: 2 },
    },
  }).mount(window.splide.Extensions);
}






