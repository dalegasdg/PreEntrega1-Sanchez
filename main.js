//Simulador de una parte de un carrito de compras.
// Hice un ciclo que permita agregar herramientas a un carrito de compras
// y que se reptita hasta que el usuario no quiera agregar más elelemntos
// Y al final que le diga cuántos elementos tienen en el carrito y cuánto le saldría pagarlo.

let comprar = true // mientras sea true que repita el ciclo
let carrito = 0  // para mostrar el valor Total del carrito
let unidades = 0 //para mostrar la cantidad de items que se agregaron al carrito

//las herramientas
let taladro = 34000
let amoladora = 30000
let sierra = 55000

// variables que necesito para validad el tipo de producto y la cantidada que voy a agregar
let cantidad = 0
let producto = true

// creé una función para no repetir tantas líneas
function AgregarProductos () {
    cantidad = parseInt(prompt("¿Qué cantidad?"))
    subTotal = (producto * cantidad) 
    carrito = (carrito + subTotal)
    unidades = (unidades + cantidad)
    alert("Se agregaró " + cantidad + " unidades al carrito")
    } 

//Mi bucle mientras quiera comprar
do {
  let consultar = prompt("¿Quiere agregar un producto al carrito?\n SI - NO").toLocaleLowerCase()
   if ((consultar == "si") || (consultar == "no")){ 
      if (consultar =="si") {
        
        producto = prompt("¿Que producto desaa agregar al carrito\ntaladro - amoladora - sierra").toLocaleLowerCase()
        
        if (producto == "amoladora" ){
           producto = amoladora 
           AgregarProductos()
          
        }
        if (producto == "taladro" ){
           producto = taladro
          AgregarProductos()
        }
        
        if (producto == "sierra" ){
           producto = sierra 
           AgregarProductos()
        }
        
        comprar= true 
      }

     if (consultar =="no") {
        alert("Muchas gracias")
        alert("Hay " + unidades + " items en el carrito")
        alert("El valor de su carrito es de $"+ carrito)
       
       comprar = false //cuándo ya no quiere comprar más hacque que luego el while corte la iteración
      }
     
   } else {
     alert("respuesta invalida")
   }

} while (comprar);

console.log("Total a pagar $" + carrito)
console.log("Hay " + unidades + " items en el carrito")