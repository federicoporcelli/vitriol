

class productos {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

const elementos = [];
elementos.push (new productos ("Barbijo", 100));
elementos.push (new productos ("Camisolin", 300));
elementos.push (new productos ("Alcohol en gel", 250));
elementos.push (new productos ("Cofias", 75));
elementos.push (new productos ("Mascara Protectora", 500));
elementos.push (new productos ("Kit", 1000));

for (const productos of elementos) {
    console.log(productos.nombre)
    console.log(productos.precio)
    
}



