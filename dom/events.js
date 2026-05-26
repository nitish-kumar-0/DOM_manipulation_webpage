let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = generatRandColor();
    h3.innerText= randomColor;

    console.log("color updated");

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    div.addEventListener("mouseenter",()=>{
        console.log("mouse is inside b0x");
    });

});



function generatRandColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
}