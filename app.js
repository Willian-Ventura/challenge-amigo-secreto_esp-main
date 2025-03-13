// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[]

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo =inputAmigo.value;

    if(nombreAmigo===''){
        alert('Por favor, inserte un nombre.');
        return;
    }
    

    amigos.push(nombreAmigo);

    mostrarLista();

    inputAmigo.value='';
}

function mostrarLista(){
    const listaAmigos=document.getElementById('listaAmigos')
    listaAmigos.innerHTML='';

    for(let i=0;i<amigos.length;i++){
        listaAmigos.innerHTML+=`<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length===0){
        alert('No hay amigos en la lista para sortear. Por favor, añada algunos nombres.');
        return;
    }
    const indiceAleatorio=Math.floor(Math.random()*amigos.length);
    const amigoSorteado=amigos[indiceAleatorio];

    const resultado=document.getElementById('resultado');
    resultado.innerHTML=`<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`
}