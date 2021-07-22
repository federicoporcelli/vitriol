
function producto (tipo, stock, precio, envio) {
    this.tipo  = tipo;
    this.stock = stock;
    this.precio = precio;
    this.envio = envio;
    this.mostrar = function () {console.log("Tipo: " +this.tipo, "Cantidad: " + this.stock,"Precio: $" + this.precio,"Envio a: " + this.envio)}
}

const producto1 = new producto ("Barbijo", 10, 100, "CABA/GBA");
const producto2 = new producto ("Camisolin", 10, 300, "CABA/GBA");
const producto3 = new producto ("Alcohol en gel", 10, 250, "CABA");
const producto4 = new producto ("Cofias",10, 75, "CABA/GBA");
const producto5 = new producto ("Mascara Protectora", 10, 500, "CABA")
const producto6 = new producto ("Kit", 10, 1000, "CABA/GBA");

producto1.mostrar();
producto2.mostrar();
producto3.mostrar();
producto4.mostrar();
producto5.mostrar();
producto6.mostrar();
