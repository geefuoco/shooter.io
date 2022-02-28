import Shape, { ShapeOptions } from "./shape.js";

export interface MovableShapeOptions extends ShapeOptions {
  velocity: { x: number; y: number };
}

export default class MovableShape extends Shape {
  protected velocity: { x: number; y: number };

  constructor({
    context,
    position,
    color,
    size,
    velocity
  }: MovableShapeOptions) {
    super({ context, position, color, size });
    this.velocity = velocity;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    super.draw();
  }
}
