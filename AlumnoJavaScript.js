//Respuestas correctas
let correctas = [3,2];

//Respuestas del usuario
let opcion_elegida=[];
let cantidad_correctas=0;

//Funcion que toma el num de pregunta y el input elegido a la pregunta
function respuesta(num_pregunta, seleccionada){
    //guardar respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs para cuando elige otra opcion
    // arma el id para seleccionar el section correspondiente
    id="p"+num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    labels[9].style.backgroundColor = "white";

    // doy color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "rgb(255, 24, 1)";
}

//Funcion compara los aciertos con las respuesta seleccionadas
function corregir(){
    cantidad_correctas=0;
    for(i=0; i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
document.getElementById("resultado").innerHTML=cantidad_correctas;
}