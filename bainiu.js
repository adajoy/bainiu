class Point{    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default class BaiNiu {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move(ctx, point) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(point.x, point.y);
        ctx.fill();
    }

    rush(ctx, bainiu) {
        const distance = Math.sqrt(Math.pow((bainiu.x - this.x) , 2) + Math.pow((bainiu.y - this.y) , 2))
        if(distance<1) return
        let ratio = this.speed / distance
        if(ratio>1) ratio = 1
        const dist = new Point(((bainiu.x - this.x) * ratio + this.x), ((bainiu.y - this.y) * ratio + this.y))
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(dist.x, dist.y);
        ctx.closePath();
        ctx.stroke();
        this.x = dist.x
        this.y = dist.y
    }
}