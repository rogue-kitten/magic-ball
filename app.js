window.onload = () => {
  var s = document.getElementsByClassName("loader-wrapper")[0].style;
  s.opacity = 1;
  (function fade() {
    (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
  })();
};

const canvas = document.getElementsByClassName("canvas");

const context = canvas[0].getContext("2d");
canvas[0].width = window.innerWidth;
canvas[0].height = window.innerHeight;

const frameCount = 150;

const currentFrame = (index) => `./assets/${(index + 1).toString()}.jpg`;
const images = [];
let obj = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(obj, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "57%",
    },
    onComplete: () => {
      gsap.to(".text", {
        opacity: 0,
        scrollTrigger: {
          scrub: 1,

          start: "58%",
          end: "64%",
        },
      });
    },
  }
);

gsap.fromTo(
  ".text2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "64%",
      end: "71%",
    },
    onComplete: () => {
      gsap.to(".text2", {
        opacity: 0,
        scrollTrigger: {
          scrub: 1,

          start: "72%",
          end: "78%",
        },
      });
    },
  }
);

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;
  context.clearRect(0, 0, canvas[0].width, canvas[0].height);
  context.drawImage(images[obj.frame], 0, 0, canvas[0].width, canvas[0].height);
}

images[0].onload = render;
