//Declaração/criação da função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorALL('.tecla');

let contador = 0;
while(contador<9){
    listaDeTeclas[0].onclick = tocaSomPom
    contador= contador+1;
    console.log(contador);
}