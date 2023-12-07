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

let ultimaBusqueda = document.getElementById("UltimasBusquedas");

let resultadoBusqueda = document.getElementById("resultado");

window.onload = function () {
    let GuardadoLocal = localStorage.getItem("busquedaGuardada");
    if (GuardadoLocal) {
        UltimasBusquedas.innerHTML = GuardadoLocal;
    }
};

respuesta.addEventListener("keydown",function(event) {
    let valorinput = respuesta.value;
    if (event.key === "Enter") {
        resultadoBusqueda.innerHTML = valorinput;
        localStorage.setItem("busquedaGuardada", valorinput);
        respuesta.value ="";
    }
    });

boton.addEventListener("click",function() {
        let valorinput = respuesta.value;
        resultadoBusqueda.innerHTML = valorinput;
        localStorage.setItem("busquedaGuardada", valorinput);
        respuesta.value = "";
    });