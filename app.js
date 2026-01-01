let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("item");
    
    let delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    delBtn.classList.add("del");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
    console.log("button added");
});

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName == "I"){
    let listItem = event.target.parentElement.parentElement;
    listItem.remove();
    console.log("deleted");
    }
})
