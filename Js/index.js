function ejemplo(){
    var texto = document.getElementById('p-encriptado');
    var contenido = texto.textContent;
    var textarea = document.createElement('textarea');
    textarea.value = contenido;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('¡Texto copiado al portapapeles!');
}

function encriptar_texto(){
    var input = document.getElementById("input").value;
    var encriptado = "";
    for (var i = 0; i < input.length; i++) {
        var caracter = input.charAt(i);
        if (caracter == 'a'){
            encriptado = encriptado + "ai";
        }else if(caracter == "e"){
            encriptado = encriptado + "enter";
        }else if(caracter == "i"){
            encriptado = encriptado + "imes";
        }else if(caracter == "o"){
            encriptado = encriptado + "ober";
        }else if(caracter == "u"){
            encriptado = encriptado + "ufat";
        }else{
            encriptado = encriptado + caracter;
        }
    }

    limpiar_elment(encriptado);
    
}


function desencriptar_texto(){
    var input = document.getElementById("input").value;
    var nuevaCadena = "";
    var enter = "enter";
    var imes = "imes";
    var ai = "ai";
    var ober = "ober";
    var ufat = "ufat";
    for (var i = 0; i < input.length; i++) {
        if (input.slice(i, i + enter.length) === enter) {
            nuevaCadena += "e";
            i += enter.length - 1;
        }else if(input.slice(i, i + imes.length) === imes){
            nuevaCadena += "i";
            i += imes.length - 1;
        }else if(input.slice(i, i + ai.length) === ai){
            nuevaCadena += "a";
            i += imes.length - 1;
        }else if(input.slice(i, i + ober.length) === ober){
            nuevaCadena += "o";
            i += imes.length - 1;
        }else if(input.slice(i, i + ufat.length) === ufat){
            nuevaCadena += "u";
            i += imes.length - 1;
        }else {
            nuevaCadena += input[i];
        }
    }
    limpiar_elment(nuevaCadena);
    console.log(nuevaCadena);
}


function limpiar_elment(encriptado){
    var divElement = document.getElementById('ejemplo');
    // Elimina todos los hijos del elemento div
    while (divElement.firstChild) {
    divElement.removeChild(divElement.firstChild);
    }
    // Crea un nuevo elemento p
    var pElement = document.createElement('p');
    pElement.textContent = encriptado;
    pElement.id = 'p-encriptado';


    var buttonElement = document.createElement('button');
    buttonElement.textContent = 'Copiar';
    buttonElement.id = 'button-copiar';
    buttonElement.onclick = ejemplo;
    //Crear boton copiar

    
    //Agregar elemento a div
    divElement.appendChild(pElement);
    divElement.appendChild(buttonElement);
    // Agrega el nuevo elemento p al div
    var input_ = document.getElementById("input");
    input_.value = "";
}

