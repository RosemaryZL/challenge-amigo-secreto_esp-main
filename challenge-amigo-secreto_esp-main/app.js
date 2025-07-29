let amigos = [];


function agregarAmigo(){
    let valorIngresado = document.getElementById("amigo");
    let nombres = valorIngresado.value; //revisar

    if(nombres === ""){
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    amigos.push(nombres); //agrega elementos al final
    valorIngresado.value = "";
    console.log(nombres); //verificar en consola

    limpiarCaja();
    mostrarAmigoLista();

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigoLista(){
    let listaAmigo = document.getElementById("listaAmigos");

    listaAmigo.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigo.appendChild(li);
    }
}

function sortearAmigo(){

    let resultado = document.getElementById("resultado");

    if(amigos.length == 0){
        alert('No hay amigos para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}