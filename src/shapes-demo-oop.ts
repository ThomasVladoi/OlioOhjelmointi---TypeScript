import { Rectangle, Circle } from "./shapes.js";

const canvas: HTMLCanvasElement =
    document.getElementById("myCanvas") as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D =
    canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle = new Rectangle(40, 50, 200, 100);
const rectangle2 = new Rectangle(300, 100, 150, 200);

const circle = new Circle(600, 200, 75);

rectangle.draw(ctx);
rectangle2.draw(ctx);
circle.draw(ctx);

export {};