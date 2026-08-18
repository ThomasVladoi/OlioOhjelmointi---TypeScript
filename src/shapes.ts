export class Point { 
    x: number; 
    y: number; 
 
    constructor(x: number, y: number) { 
        this.x = x; 
        this.y = y; 
    } 
} 
 
export class Size { 
    width: number; 
    height: number; 
 
    constructor(width: number, height: number) { 
        this.width = width; 
        this.height = height; 
    } 
} 

export class Shape {
    style: string;

    constructor(style: string) {
        this.style = style;
    }
}
 
export class Rectangle extends Shape { 
    location: Point; 
    size: Size; 
 
    constructor(x: number, y: number, width: number, height: number) { 
        super("blue");

        this.location = new Point(x, y); 
        this.size = new Size(width, height); 
    } 
 
    draw(ctx: CanvasRenderingContext2D) { 
        ctx.fillStyle = this.style; 
        ctx.fillRect( 
            this.location.x, 
            this.location.y, 
            this.size.width, 
            this.size.height 
        ); 
    } 
} 
 
export class Circle extends Shape { 
    center: Point; 
    radius: number; 
 
    constructor(x: number, y: number, radius: number) { 
        super("red");

        this.center = new Point(x, y); 
        this.radius = radius; 
    } 
 
    draw(ctx: CanvasRenderingContext2D) { 
        ctx.beginPath(); 
        ctx.arc( 
            this.center.x, 
            this.center.y, 
            this.radius, 
            0, 
            2 * Math.PI 
        ); 
        ctx.fillStyle = this.style; 
        ctx.fill(); 
    } 
}