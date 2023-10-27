//Declaração/criação da função tocaSomPom
function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorALL('.tecla');

let contador = 0;
while(contador< listaDeTeclas.length){
    const 
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador+1;
    console.log(contador);
}