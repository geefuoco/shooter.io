import Player from "./player.js";
(() => {
  const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  const resizeWindow = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeWindow();
  window.addEventListener("resize", resizeWindow);

  let animationId: number;
  const player = new Player({
    context,
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    color: "white",
    size: { width: 40, length: 40 },
    velocity: { x: 0, y: 0 }
  });

  const gameLoop = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

    animationId = requestAnimationFrame(gameLoop);
  };

  gameLoop();
})();
