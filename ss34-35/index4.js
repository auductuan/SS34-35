let a = document.getElementById("item");
let b = document.getElementById("class");
b.onclick = function(){
    a.innerText = "This text is optional";
    a.style.backgroundColor = "yellow";
    a.style.color = "red";
}