const productos = [{id: 1, nombre: 'sabana', precio: 2000},
{id: 1, nombre: 'frasada', precio: 4500},
{id: 1, nombre: 'almohada', precio: 8000},
{id: 1, nombre: 'colchon', precio: 90000}]

let carrito = []




let seleccion = true
while(seleccion){
    seleccion = confirm("Hola buen dia. Desea comprar algun producto?")
    if(seleccion == true){
        let todosLosProductos = productos.map((producto) => producto.nombre + "  $" + producto.precio)
        alert("Nuestra lista de productos:")
        alert(todosLosProductos.join("\n"))
        agregarProductos()
    }
    else{
        alert("Muchas gracias por su visita")
    }
}

function agregarProductos(){

    while(seleccion){
        let producto = prompt("agrega un producto a tu carrito")
        let precio = 0

        if(producto == "sabana" || producto == "frasada" || producto == "almohada" || producto == 
        "colchon"){
            switch(producto){
                case "sabana":
                    precio = 2000
                    break
                case "frasada":
                    precio = 4500
                    break
                case "almohada":
                    precio = 8000
                    break
                case "colchon":
                    precio = 90000
                    break 
                default: console.error("Ingresa un dato válido, por favor.")
                    return 
            }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
        
        }else{
            alert("no disponemos ese producto")
        }
        seleccion = confirm("desea seguir comprando?")

        while(seleccion === false){
            carrito.forEach((carritoFinal) => {
                alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
            })
        break
        }
    }
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.unidades, 0)
    alert(`Gracias por su compra. El total a abonar es: ${total} `) 

}
