const button = document.querySelector(".submit")



function log(){
    let x =document.querySelector(".title").value;
    let y =document.querySelector(".description").value;
    console.log(x,y);

}
button.addEventListener("click",log)