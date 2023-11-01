let comprar = true
let carrito = 0
let taladro = 34000
let amoladora = 30000
let sierra = 55000
let unidades = 0
let cantidad = 0
let producto = true

function AgregarProductos () {
    cantidad = parseInt(prompt("¿Qué cantidad?"))
    subTotal = (producto * cantidad) 
    carrito = (carrito + subTotal)
    unidades = (unidades + cantidad)
    alert("Se agregaró " + cantidad + " unidades al carrito")
    } 

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
       
       comprar = false
      }
     
   } else {
     alert("respuesta invalida")
   }

} while (comprar);

console.log("Total a pagar $" + carrito)
console.log("Hay " + unidades + " items en el carrito")