function query (tag){
    return document.querySelector(tag);
}

function queryAll (tag) {
    return document.querySelectorAll(tag);
}

function create (tag){
    return document.createElement(tag);
}

function queryAddChild(contener, child){
    return query(contener).appendChild(child);
}


const nomes = queryAll("p");
const button = query("button");
const input = query("input");

button.onclick = (e) => {
    e.preventDefault();
    const p = create("p");
    if(input.value.length > 0){ 
        queryAddChild("div", p);
        p.innerHTML = input.value + " tem " + input.value.length + " letras em sou nome";
        input.value = "";  
    }
}