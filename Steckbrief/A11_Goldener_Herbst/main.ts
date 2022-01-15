namespace L11_Autumn {
    export enum main {

    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let linewidth: number = 2;

    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
        console.log("Squirrel walking");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        createPaths();

        createLeafs(5);

        createLeaf();
        createLeaf();
        createLeaf();


        window.setInterval(update, 20);
    }

    function throwNut(_origin: Vector): void {
        console.log("throw Nut");
        let velocity: Vector = Vector.getRandom(200, 200);
        let nut: Nut = new Nut(_origin, velocity);
       
        nut.move(0.15);
        moveables.push(nut);
    }


}

function createNuts(_nNuts: number): void {
    console.log("Create Nuts");
    for (let i: number = 0; i < _nNuts; i++) {
        let Nuts: Nut = new Nut(1.0);
        moveables.push(Nuts);
    }
}

function createLeafs(): void {
    console.log("Create ufo");
    let leaf: Leaf = new Leaf();
    moveables.push(leaf);
}

function update(): void {
    // console.log("Update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let moveable of moveables) {
        moveable.move(1 / 50);
        moveable.draw();
    }

    deleteExpandables();



}
