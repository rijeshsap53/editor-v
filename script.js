const dialouge = document.querySelector("#dialouge");
const choose_img =  document.querySelector("#uploader");
const choose_img2 = document.querySelector(".option");

choose_img.addEventListener("click", function(){
    dialouge.click();
});

choose_img2.addEventListener("click", function(){
    dialouge.click();
});

const canvas = document.querySelector("#canvas");
const inf = document.querySelector(".inf");
let uploaded_img = "";

dialouge.addEventListener("change", function(){
    inf.style.display="none";
    choose_img.style.display="block";

    
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_img=reader.result;
        canvas.style.backgroundImage='url('+uploaded_img+')'
    });
    reader.readAsDataURL(this.files[0]);
});





