let a = document.getElementById("class");
let b = document.getElementById("Table");
    a.addEventListener("click", function() {
        let tbody = b.getElementsByTagName('tbody')[0];

        let newRow = tbody.insertRow();
        let x = newRow.insertCell(0);
        let y = newRow.insertCell(1);
        let z = newRow.insertCell(2);

        x.innerHTML = "Cell 1 Row 1";
        y.innerHTML = "Cell 2 Row 1";
        z.innerHTML = "Cell 3 Row 1";
    });