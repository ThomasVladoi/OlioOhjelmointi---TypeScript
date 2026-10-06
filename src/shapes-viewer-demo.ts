import { Rectangle, Circle } from "./shapes.js";
import { ShapeViewer } from "./shape-viewer.js";

const canvas = document.querySelector("canvas")!;

const viewer = new ShapeViewer(canvas);

viewer.addShapes([
    new Rectangle(50, 50, 100, 80),
    new Rectangle(200, 100, 150, 100),
    new Circle(150, 250, 50),
    new Circle(350, 300, 70)
]);

viewer.printShapes();

