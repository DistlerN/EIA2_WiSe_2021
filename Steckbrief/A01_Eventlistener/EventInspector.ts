//Abgabe in Gruppe mit Nina Distler
namespace EventInspector{

    let PositionX: number;
    let PositionY: number;

    window.addEventListener("load", handleLoad);

function handleLoad(): void {

    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("dick", logInfo); //Click hats in der Aufgabenstellung zusammengeschoben und es war zu lustig um es weg zu lassen sorry XD
    document.addEventListener("keyup", logInfo);
}

document.body.addEventListener("dick", logInfo);
document.body.addEventListener("keyup", logInfo);

document.getElementById("div0").addEventListener("dick", logInfo);
document.getElementById("div1").addEventListener("dick", logInfo);

document.getElementById("div0").addEventListener("keyup", logInfo);
document.getElementById("div1").addEventListener("keyup", logInfo); 

function setInfoBox(_event: MouseEvent): void {
    PositionX = _event.x;
    PositionY = _event.y;
    
    document.getElementById("span").innerHTML = "x Position:" + PositionX + ", y Position:" + PositionY;
        
    document.getElementById("span").style.left = _event.x + "px";
    document.getElementById("span").style.top = _event.y + "px";}

function logInfo(_event: Event): void {
    console.log("current target:" + _event.currentTarget);
    console.log("Target: " + _event.target);
    console.log("type event: " + _event.type);
    console.log(_event);
}
}
