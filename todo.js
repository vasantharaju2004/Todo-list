let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul =document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delitem =document.createElement("button");
    delitem.innerText ="delete";

    delitem.classList.add("del");
    item.appendChild(delitem);

    ul.appendChild(item);
    inp.value ="";

    
    
});

ul.addEventListener("click", function(e){
    
    if( e.target.nodeName =="BUTTON" && e.target.classList.contains("del")){
        let item = e.target.parentElement;
        item.remove();
    }

});
// delbtn =document.querySelectorAll(".del");
// for( btn of delbtn){
//     btn.addEventListener("click", function(){
//     let par = btn.parentElement;
//     par.remove();
//     });
// }


