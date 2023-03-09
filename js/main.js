
const listaProductos = "Nuestra lista de  productos \n" +
                    "1) Sabana - $2000\n" +
                    "2) frasada - $4500\n" +
                    "3) almohada - $8000 \n" +
                    "4) colchon - $90000"

let seleccion = true
while(seleccion){
    seleccion = confirm("Hola buen dia. Desea comprar algun producto?")
    if(seleccion == true){
        alert (listaProductos)
        agregarProductos()
    }
    else{
        alert("Muchas gracias por su visita")
    }
}

function agregarProductos(){
    let total = 0
    while(seleccion){
        let producto = prompt("agrega un producto a tu carrito")
        let precio = 0
        let unidades = 0
        if(producto == "sabana" || producto == "frasada" || producto == "almohada" || producto == 
        "colchon"){
            switch(producto){
                case "sabana":
                    precio = 2000
                    unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
                    alert("Subtotal de este producto:" + " $" + calcularSubTotal(precio, unidades))
                    break
                case "frasada":
                    precio = 4500
                    unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
                    alert("Subtotal de este producto:" + " $" + calcularSubTotal(precio, unidades))
                    break
                case "almohada":
                    precio = 8000
                    unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
                    alert("Subtotal de este producto:" + " $" + calcularSubTotal(precio, unidades))
                    break
                case "colchon":
                    precio = 90000
                    unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
                    alert("Subtotal de este producto:" + " $" + calcularSubTotal(precio, unidades))
                    break 
                default: console.error("Ingresa un dato válido, por favor.")
                    return 
            }
            total += calcularSubTotal(precio, unidades)
        
        }else{
            alert("no disponemos ese producto")
        }
        seleccion = confirm("desea seguir comprando?")

        while(seleccion === false){
            alert("Gracias por su compra. El total a abonar es: " + " $" + total)
            break
        }
    }
}

function calcularSubTotal(precio, unidades){
    let subTotal = 0
    subTotal = precio * unidades
    return subTotal
}