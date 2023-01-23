//RODRIGO MARIO BENTIN NAI
//"APP DE STOCK PARA MATERIALES DE CONSTRUCCION"

/*
let material = 0;

case "1":

alert("Stock actual: " + material + " Unidades");
break;

case "2":
    let ingreso = parseInt(prompt("Cantidad de Unidades a ingresar"));
    material += ingreso;
    alert("Stock actualizado: " + material + " Unidades");
break;

case "3":
    let egreso = parseInt(prompt("Cantidad de Unidades a despachar"));
    if (egreso <= material) {
        material = material - egreso;
        alert("Stock actualizado: " + material + " Unidades");
    } else {
        alert("Stock insuficiente \nVerifica Stock disponible e intenta nuevamente")
    }
break;
*/

let userName = "rodrigo"
let password = "1357";


function login() {

    let access = false;

    for (let i=3; i>0; i--) {
        let user = prompt("Ingrese Nombre de Usuario (minusculas)")
        let pass = prompt("Ingrese Contraseña Numérica")
        if (user === userName && pass === password) {
            alert("Bienvenido Rodrigo! \nPresiona Enter para continuar");
            access = true;
            break;
        } else {
            alert("Usuario o contraseña Incorrecta, intente nuevamente por favor!")
        }
    }   

    return access
}

class Materiales {
    constructor(id, nombre, cantidad) {
    this.id = Number(id);
    this.nombre = nombre;
    this.cantidad = Number(cantidad);
    }
}

const stockMateriales = [];

function crearNuevoMaterial() {
    let material = new Materiales(
        prompt("ingrese codigo del material"),
        prompt("ingrese nombre del material"),
        prompt("ingrese cantidad de unidades")
    );
    stockMateriales.push(material);
}
    
function listadoDeMateriales() {
    if (stockMateriales.length == 0) {
        alert("Material Inexistente");
        } else {
    for (const material of stockMateriales) {
        alert(
            `id: ${material.id}\n nombre: ${material.nombre} \n unidades: ${material.cantidad}`
            );
        }
    }
}
    
function modificarMaterial() {
    if (stockMateriales.length == 0) {
        alert("Material Inexistente");
    } else {
        let modificar = prompt("Ingrese Id de Material a modificar");

        for (const material of stockMateriales) {
            if (material.id === Number(modificar)) {
                material.nombre = prompt("Ingrese Nombre Nuevo")
                material.cantidad = Number(prompt("Ingrese nueva Cantidad"));

                console.log(stockMateriales);
            }
        }
    }
}

let stockMaterial = []

function ingresoCantidades() {

    let elejirMaterial = parseInt(prompt("ingrese ID del Material")); 

    let agregarCantidad = stockMaterial.find((el) => el.id == elejirMaterial)
    stockMaterial.push(agregarCantidad);
    
    alert(stockMaterial);
}

if (login()) {    
    
    let option = prompt("Elegir opción: \n1 - Materiales \n2 - Nuevo Material \n3 - Modificar Material \n4 - Agregar Stock \n5 - Salir");

    while (option != "5") {
        switch (option) {
            case "1":
                listadoDeMateriales();
            break;
            
            case "2":
                crearNuevoMaterial();
            break;

            case "3":
                modificarMaterial();
            break;

            case "4":
                ingresoCantidades();
            break;

            default:
                alert("Opción elegida inválida");
            break;
        }
        option = prompt("Elegir opción: \n1 - Materiales \n2 - Nuevo Material \n3 - Modificar Material \n4 - Agregar Stock \n5 - Salir");
    }

} else {
    alert("Usuario o contraseña Incorrecta \nIntente loguearse nuevamente en unos instantes")
}
alert("Sesión Finalizada")
