const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

const rectangle = {
    x: 300,
    y: 200,
    width: 200,
    height: 200,

    draw: function() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

const circle = {
    x: 600,
    y: 300,
    radius: 75,

    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }
};

rectangle.draw();
circle.draw();

const rectangle2 = {
    x: 100,
    y: 100,
    width: 150,
    height: 100,

    draw: function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

const rectangle3 = {
    x: 600,
    y: 100,
    width: 100,
    height: 150,

    draw: function() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

rectangle2.draw();
rectangle3.draw();

export {};