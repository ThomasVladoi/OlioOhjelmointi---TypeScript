const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "blue";
ctx.fillRect(300, 200, 200, 200);