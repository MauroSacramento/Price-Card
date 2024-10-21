//F$EA6C
let cb = document.querySelector("#toggle");
let startPrice = document.querySelector("#starterprice");
let monthPrice = document.querySelector("#monthprice");

cb.addEventListener("click", function(){
    if (cb.checked){
        startPrice.innerHTML = "$190";
        monthPrice.innerHTML = "$1188/year";
        document.querySelector(".toglabel").style.backgroundColor = "#F4106C";
    }else{
        startPrice.innerHTML = "$19";
        monthPrice.innerHTML = "$99/month";
        document.querySelector(".toglabel").style.backgroundColor = "gray";
    }
})
