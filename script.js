var generateBtn = document.querySelector(".generateBtn")
var data = document.querySelector("#inputField")
var qrImage = document.querySelector("#qrImage")
var qr = document.querySelector(".qr")
generateBtn.addEventListener("click",function(){
    if(data.value==""){
        alert("Enter Something")
    }else{
        generateQR(data.value)
    }
})

async function generateQR(data){
    var apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data+"";
    var imgSrc = await fetch(apiURL);
    qr.style.borderTop = "2px solid black";
    qr.style.borderBottom = "2px solid black";
    qrImage.src = imgSrc.url;
}