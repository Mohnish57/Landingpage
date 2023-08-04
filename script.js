var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #631cde";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #631cde";
    crsr.style.backgroundColor = "#631cde";
  });
});

gsap.to(".nav", {
  backgroundColor: "black",
  height: "3.5rem",
  duration: 1,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    // markers: true,
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from(".about-us img, .about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 5,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 5,
  },
});
gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
