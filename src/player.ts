import MovableShape, { MovableShapeOptions } from "./movableShape.js";

export default class Player extends MovableShape {
  constructor({
    context,
    position,
    color,
    size,
    velocity
  }: MovableShapeOptions) {
    super({ context, position, color, size, velocity });
    this.initializeControlls();
  }

  private initializeControlls() {
    window.addEventListener("keydown", (ev) => {
      switch (ev.key) {
        case "w":
        case "W":
          this.velocity.y = -1;
          break;
        case "s":
        case "S":
          this.velocity.y = 1;
          break;
        case "a":
        case "A":
          this.velocity.x = -1;
          break;
        case "d":
        case "D":
          this.velocity.x = 1;
          break;
        default:
          break;
      }
    });
    window.addEventListener("keyup", (ev) => {
      switch (ev.key) {
        case "w":
        case "W":
        case "s":
        case "S":
          this.velocity.y = 0;
          break;
        case "a":
        case "A":
        case "d":
        case "D":
          this.velocity.x = 0;
          break;
        default:
          break;
      }
    });
  }
}
