//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            amigos.splice(index, 1);
            atualizarLista();
        };
        
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let disponiveis = sorteio.filter(nome => nome !== amigos[i]);
        
        if (disponiveis.length === 0) {
            alert("Não foi possível realizar o sorteio sem repetições. Tente novamente.");
            return;
        }
        
        let sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        resultado[amigos[i]] = sorteado;
        
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (let amigo in resultado) {
        let item = document.createElement("li");
        item.textContent = `${amigo} tirou ${resultado[amigo]}`;
        listaResultado.appendChild(item);
    }
}
