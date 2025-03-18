//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarNome() {
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    document.getElementById("nome").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}`;
}
