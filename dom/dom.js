// selecting element 
// getElementById 

let smallImg = document.getElementsByClassName("oldImg");

for(let i = 0;i<smallImg.length;i++){
    // smallImg[i].src = "./assets/spiderman_img.png";
     if(i===2){
        break;
    }

    smallImg[i].src = "./assets/spiderman_img.png";

   

    // console.dir(smallImg[i].src);


    console.log(`src has beeen changed ${i} `);

}

let msg = document.getElementsByTagName("p");
console.log(msg);
msg.innerHTML = "this has been changed";