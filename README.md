# Webflow Theme – Dynamic Slider & Animation Kit

A modern Webflow theme featuring auto-scrolling logo sliders, testimonial sliders with fade transitions, and custom animations—all powered by Splide.js and GSAP. Designed for fast integration, clean design, and high responsiveness.

---

## Features

- **Logo Carousel** – Autoscrolling Splide logo slider with breakpoint support
- **Testimonial Slider** – Smooth fade-in transitions using Splide fade type
- **Custom Animations** – Text animations and smooth fade-in effects
- **Responsive Layout** – Fully optimized for desktop, tablet, and mobile
- **Modular Code** – Easily reusable functions for sliders

---

## Folder Structure

/your-repo/
├── slide.css              → Splide slider initialization Css
├── script.js              → Splide slider initialization scripts
├── text-animations.js     → Custom animation functions
└── README.md              → You're reading it

Setup Instructions

1. Add the required CDN links in Webflow

Go to:
Webflow > Project Settings > Custom Code > Head & Footer sections

Head

<!-- Splide CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" />


Footer

<!-- Splide JS -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

<!-- Custom JS -->
<script src="https://cdn.jsdelivr.net/gh/your-username/your-repo-name/js/slider.js"></script>
<script src="https://cdn.jsdelivr.net/gh/your-username/your-repo-name/js/animations.js"></script>

Replace your-username and your-repo-name with your actual GitHub username and repo name.


Webflow Integration

How to Use Sliders in Webflow

🔄 Logo Slider

Add a div with #logo-slider as the ID and give it a class splide

Place logo images inside .splide__slide list items


Testimonial Slider

Use a div with #testimonial-slider-feedback as the ID give it a class splide

Each testimonial should be in a .splide__slide


These functions are already built into this Webflow theme.
// Logo Slider
function initLogoSlider() {
  new Splide('#logo-slider', {
    type: 'loop',
    perPage: 4,
    gap: '2rem',
    arrows: false,
    pagination: false,
    drag: false,
    autoScroll: { speed: 1 },
    breakpoints: {
      991: { perPage: 3 },
      767: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount(window.splide.Extensions);
}

// Testimonial Feedback Slider
function initFeedbackSlider() {
  const slider = new Splide("#testimonial-slider-feedback", {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 2000,
    speed: 800,
    arrows: true,
    pagination: false,
  });

  slider.mount();
}

Simply call the function on the page where you want to use the slider. Make sure to remove any unused functions to keep the code clean. For example:
<script>
document.addEventListener("DOMContentLoaded", function () {
  const autoScroll = window.splide.Extensions.AutoScroll;
	initHeroSlider();
  initFrontSlider(autoScroll);
  initBackSlider(autoScroll);
  initTestimonialSlider();
});
</script>


🧑‍💻 Developer Notes

Scripts are modular and scoped to avoid conflicts

CSS is kept minimal to allow Webflow designers full control

You can customize text animations via text-animations.js


#License
This theme is for personal and commercial use. If you redistribute, please provide attribution to the original repository.

#Support
For support or improvements, create an issue or open a pull request.

#Restore all functions
We have created a sandbox environment for you. You can copy and paste any code from the link below. If anything gets deleted or changed by mistake, you can easily restore it from here.
https://codesandbox.io/p/sandbox/theme-development-h54k3q

