let caixaTexto = document.querySelector('#campo');
let form = document.querySelector('#formulario');
const primeiraDiv = document.querySelector('#div1');


form.addEventListener('submit', function(evento){
    evento.preventDefault()

    if (caixaTexto.value.length == 0){
        alert("Por favor, Digite uma tarefa!");
        return(false);
    }

    let divmae = document.createElement("div");
    let tarefas = document.createElement("p");
    let excluir = document.createElement("span");

    divmae.className = "divTarefas";
    tarefas.innerHTML=caixaTexto.value;
    excluir.innerHTML="x";
    document.getElementById("campo").value = "";
    
    divmae.appendChild(tarefas);
    divmae.appendChild(excluir);
    primeiraDiv.appendChild(divmae);

    tarefas.addEventListener("click", function(){
        tarefas.style.textDecoration = "line-through";
        tarefas.style.color = "grey";
    })

    excluir.addEventListener("click", function(){
        divmae.parentNode.removeChild(divmae);
        
    })
});

