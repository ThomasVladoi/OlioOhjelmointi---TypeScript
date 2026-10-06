import { Shape } from "./shapes.js";

export class ShapeViewer {
    private ctx: CanvasRenderingContext2D;
    private shapes: Shape[];

    public constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d")!;
        this.shapes = [];
    }

    public addShapes(shapes: Shape[]): void {
        this.shapes.push(...shapes);
        this.draw();
    }

    public addShape(shape: Shape): void {
        this.shapes.push(shape);
        this.draw();
    }

    private draw(): void {
        for (const shape of this.shapes) {
            shape.draw(this.ctx);
        }
    }

    public printShapes(): void {
        for (const shape of this.shapes) {
            console.log(shape.toString());
        }
    }
}
