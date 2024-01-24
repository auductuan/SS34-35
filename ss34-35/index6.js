let a = document.getElementById("item");
let b = document.getElementById("class");
let c= document.getElementById("inputText");
a.addEventListener("click", function() {
    let value = inputText.value;
    if (value.trim() !== "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        b.appendChild(li);
        inputText.value = "";
    }
});
