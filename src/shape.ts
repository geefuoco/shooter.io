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

  getPosition(): { x: number; y: number } {
    return this.position;
  }

  getColor(): string {
    return this.color;
  }

  getSize(): { width: number; length: number } {
    return this.size;
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

  drawArc() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size.width / 2,
      0,
      360
    );
    this.context.fill();
  }

  outOfBounds(): boolean {
    return (
      this.position.x + this.size.width < 0 ||
      this.position.x - this.size.width > window.innerWidth ||
      this.position.y + this.size.width < 0 ||
      this.position.y - this.size.width > window.innerHeight
    );
  }
}
