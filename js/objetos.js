
function Producto (tipo, stock, precio, envio) {
    this.tipo  = tipo;
    this.stock = stock;
    this.precio = precio;
    this.envio = envio;
    this.mostrar = function () {console.log("Tipo: " +this.tipo, "Cantidad: " + this.stock,"Precio: $" + this.precio,"Envio a: " + this.envio)}
}

let producto1 = new Producto ("Barbijo", 10, 100, "CABA/GBA");
let producto2 = new Producto ("Camisolin", 10, 300, "CABA/GBA");
let producto3 = new Producto ("Alcohol en gel", 10, 250, "CABA");
let producto4 = new Producto ("Cofias",10, 75, "CABA/GBA");
let producto5 = new Producto ("Mascara Protectora", 10, 500, "CABA")
let producto6 = new Producto ("Kit", 10, 1000, "CABA/GBA");

producto1.mostrar();
producto2.mostrar();
producto3.mostrar();
producto4.mostrar();
producto5.mostrar();
producto6.mostrar();

