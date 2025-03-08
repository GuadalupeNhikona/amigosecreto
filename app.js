// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        amigos.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = "";
        resultado.innerHTML = ""; // Limpiar el resultado previo si existe
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
        document.getElementById('listaAmigos').innerHTML = ""; // Limpiar la lista de amigos
        amigos = []; // Vaciar el array de amigos
    }
}