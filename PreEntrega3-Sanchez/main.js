//PreEntrega3 Sánchez Gastón
/*Objetivos Generales:
Codificar funciones de procesos esenciales y notificación de resultados
por HTML, añadiendo interacción al simulador.
Ampliar y refinar el flujo de trabajo del Script
en términos de captura de eventos, procesamiento del simulador
y notificación de resultados en forma de salidas por HTML,
modificando el DOM.
*/
/*Objetivos Específicos:
-Definir eventos a manejar y su función de respuesta.
-Modificar el DOM, ya sea para definir elementos al cargar la página
o para realizar salidas de un procesamiento.
-Almacenar datos (clave-valor) en el Stortage y recuperarlos.
*/


let respuesta = document.getElementById("Busqueda");

let boton = document.getElementById("boton");

let resultadoBusqueda = document.getElementById("UltimasBusquedas");

respuesta.addEventListener("keydown",function(event) {
    if (event.key === "Enter") {
        console.log(respuesta.value);
        respuesta.value =""
    }
    });

boton.addEventListener("click",function() {
        let valorinput = respuesta.value;
        console.log(respuesta.value);
        resultadoBusqueda.innerHTML = valorinput;
        respuesta.value = "";
    });
    