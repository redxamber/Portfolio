let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("add");

button.addEventListener("click", () => {
    var item = document.createElement("p");
    item.classList.add('styling');
    item.innerText = input.value;
    output.appendChild(item);
    input.value = "";
 
item.addEventListener("click", () => {
    item.style.textDecoration = "line-through";
  })

item.addEventListener("dblclick", () => {
    item.remove(item);
  })
})

