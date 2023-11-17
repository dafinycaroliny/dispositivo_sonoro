//Declaração/criação da função 
function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAllok('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador]; //guarda o contador da lista
    const efeito = teclas.classList [1]; //chama o 2°individual do som
    const idAudio = `#som_${efeito}`; //utiliza a junção template string ${}
    teclas.
}

let contador = 0;
while(contador< listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador+1;
    console.log(contador);
}