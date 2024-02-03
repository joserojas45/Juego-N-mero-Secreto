let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
            if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? ' intento!':' intentos!'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            //El usuario no acertó
            if (numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor')
            }
                else {
                    asignarTextoElemento('p','El número es mayor')
                }
        }
        intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = '';
}
function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números");
    } //Si ni se han sorteado todos, jugamos
    else {

        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        /*Si el número generado ya está incluido en la lista se llama de nuevo 
        a la funcion con return para que regrese el valor*/
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        } else {
            /*Si el numero generado no está en la lista podemos agregarlo a 
            la lista y retornarlo para jugar.*/
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar parámetos y mensaje de juego
    //Generar numero aleatorio
    //Inicializar intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    }

condicionesIniciales();

