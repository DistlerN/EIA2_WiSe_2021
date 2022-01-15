namespace L11_Autumn {
    export class nut extends Moveable {

        
        }
        constructor() {
            super();
            this.position = new Vector(0, Math.random() * crc2.canvas.height);

            this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(drawNut.speed);
            
    }
}
}