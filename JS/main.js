/*
RODRIGO MARIO BENTIN NAI
APLICACION DE STOCK PARA MATERIALES DE CONSTRUCCION
1 solo material en este caso
*/

let userName = "rodrigo"
let password = "1357";

//funcion
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

//condición
if (login()) {
    let cemento = 10000;

    let option = prompt("Elegir opción: \n1 - Stock de Cemento \n2 - Ingreso \n3 - Egreso \n4 - Salir");
    //ciclo
    while (option != "4"){
        //opciones del stock
        switch (option) {
            case "1":
                alert("Stock actual: " + cemento + " Bolsas de Cemento x 50Kg");
            break;
            
            case "2":
                let ingreso = parseInt(prompt("Cantidad de Bolsas a ingresar"));
                cemento += ingreso;
                alert("Stock actualizado: " + cemento + " Bolsas de Cemento x 50Kg");
            break;

            case "3":
                let egreso = parseInt(prompt("Cantidad de bolsas a despachar"));
                if (egreso <= cemento) {
                    cemento = cemento - egreso;
                    alert("Stock actualizado: " + cemento + " Bolsas de Cemento x 50Kg");
                } else {
                    alert("Stock insuficiente \nVerifica Stock disponible e intenta nuevamente")
                }
            break;

            default:
                alert("Opción elegida inválida");
            break;
        }
        option = prompt("Elegir opción: \n1 - Stock de Cemento \n2 - Ingreso \n3 - Egreso \n4 - Salir");
    }

} else {
    alert("Usuario o contraseña Incorrecta \nIntente loguearse nuevamente en unos instantes")
}
alert("Sesión Finalizada")
