export interface ShapeOptions {
  context: CanvasRenderingContext2D;
  position: { x: number; y: number };
  color: string;
  size: { width: number; length: number };
}

export default class Shape {
  protected context: CanvasRenderingContext2D;
  protected position: { x: number; y: number };
  protected color: string;
  protected size: { width: number; length: number };

  constructor({ context, position, color, size }: ShapeOptions) {
    this.context = context;
    this.position = position;
    this.color = color;
    this.size = size;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.length
    );
  }
}
