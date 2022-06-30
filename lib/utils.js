import confetti from "canvas-confetti";

export const runFireWorks = () => {
  var end = Date.now() + 6 * 500;

  // go Buckeyes!
  var colors = ["#ff33ff", "#4ce600", "#008ae6", "#ffff1a"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
