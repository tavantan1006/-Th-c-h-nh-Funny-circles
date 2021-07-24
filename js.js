function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let color = getRandomColor();

    let x = Math.random() * 1368;
    let y = Math.random() * 768;
    let radius = Math.floor(Math.random() * 80);
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function createMultipleCircle(){
    for(var i = 0; i < 30; i++){
        createCircle();
    }
}

createMultipleCircle()