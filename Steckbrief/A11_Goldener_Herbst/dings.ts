namespace L11_Autumn {
    export let crc2: CanvasRenderingContext2D;
    export let linewidth: number = 2;

    let moveables: moveable[] = [];

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let streetWidthBack: number = 50;
        let streetWidthFront: number = 900;
        let treesOffsetBack: number = 15;
        let treesOffsetFront: number = 500;

        //let posMountains: Vector = { x: 0, y: horizon };
        //let posLeafs: Vector = {x: 400, y: 800}; 
        //let posStreet: Vector = { x: crc2.canvas.width / 2, y: horizon };
        //let posTreesStart: Vector = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        //let posTreesEnd: Vector = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };

        drawBackground();
         
    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#e6f7ff");
        gradient.addColorStop(golden, "#ffa94d");
        gradient.addColorStop(1, "#267326");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    

    
    


}