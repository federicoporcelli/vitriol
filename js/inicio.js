

let usuario = document.getElementById ("nombre")
let correo = document.getElementById ("mail")

document.getElementById ("enviar").onclick = saludar

function saludar (event) {
    event.preventDefault ();
    localStorage.setItem('Nombre', usuario.value);
    localStorage.setItem('Direccion de Mail', correo.value)
    const datosIngresados = document.createElement("div");
    datosIngresados.textContent = "Usted ingreso: Nombre: " + localStorage.getItem('Nombre') + ", y su direccion de mail es: " + localStorage.getItem('Direccion de Mail')
    document.body.appendChild(datosIngresados)    
}

const datosIngresados = document.createElement("div");
datosIngresados.textContent = "Usted ingreso: Nombre: " + localStorage.getItem('Nombre') + ", y su direccion de mail es: " + localStorage.getItem('Direccion de Mail')

saludar()

