//RODRIGO MARIO BENTIN NAI
//"APP DE STOCK PARA MATERIALES DE CONSTRUCCION"


//PREENTREGA 1
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


//PREENTREGA 2
/*let userName = "rodrigo"
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
*/

//PRE-ENTREGA 3
//carro materiales para la construccion
let miCarrito = [];
function comenzar() {
  bienvenido();
  menu();
  mensaje();
  devolver();
}

function bienvenido() {
  const miTitulo = document.createElement("h1");
  miTitulo.innerHTML = '"RB-Materiales"';
  document.body.appendChild(miTitulo);
}

function menu() {
  materialesTipo.forEach((tipo) => {
    const miBoton = document.createElement("button");
    miBoton.setAttribute("class", "estiloBoton");
    miBoton.setAttribute("id", `${tipo.id}`);
    miBoton.innerHTML = tipo.nombre;

    document.body.appendChild(miBoton);
  });
}

function mensaje() {
  const miMensaje = document.createElement("p");
  miMensaje.innerHTML = "Seleccionar Material:";
  document.body.appendChild(miMensaje);
  misBotones();
}

function misBotones() {
  let div1 = document.createElement("div");
  document.body.appendChild(div1);
  let div2 = document.createElement("div");
  div2.setAttribute("id", "elementos");
  document.body.appendChild(div2);
  let botones = document.getElementsByClassName("estiloBoton");

  for (const botons of botones) {
    botons.addEventListener("click", () => {
      div1.innerHTML = "";
      let mats = materialesTipo.find((item) => item.id == botons.id);
      div1.innerHTML = `<h2>${mats.nombre}</h2>`;
      let galeria = materiales.filter(
        (product) => product.tipo == botons.id
      );
      renderizarMateriales(galeria);
    });
  }
}

function renderizarMateriales(arr) {
  const div = document.getElementById("elementos");
  div.innerHTML = "";
  arr.map((el) => {
    let id = el.id;
    let nombre = el.nombre;
    let precio = el.precio;
    let stock = el.stock;
    let siExiste;
    if (stock > 0) {
      siExiste = `<div class="actions">
      <button class="agregar" id=${id}>agregar</button>
      </div>`;
    } else {
      siExiste = `<div class="actions">
      Sin Stock!
      </div>`;
    }
    div.innerHTML += `
          <div class="item">
              <div class="nombre">•${nombre}</div>
              <div class="precio">$ ${precio} x Un</div>
              <div class="cantidad">${stock} Unidades</div>
              ${siExiste}
          </div>`;
  });
  sumarAlCarro();
}

function sumarAlCarro() {
  let boTonAgregar = document.getElementsByClassName("agregar");
  for (const botones of boTonAgregar) {
    botones.addEventListener('click',()=>{
      let producto = materiales.find((item) => item.id == botones.id);
      miCarrito.push(producto);
      verCarro(producto);
      totalEnCarro()
      localStorage.setItem('En El Carro', JSON.stringify(miCarrito))
    })
    
  }
}

function totalEnCarro(){
  const total = document.getElementById('TOTAL')
  total.innerText = miCarrito.reduce((acc,el)=> acc + el.precio,0)
}

function verCarro(product){
  const carrito = document.getElementById('En El Carro')
let li = document.createElement('li')
li.innerHTML += `${product.nombre} ${product.precio}`
carrito.appendChild(li)
}

function devolver() {
  let devolverLS = JSON.parse(localStorage.getItem('En El Carro'))
  if(devolverLS){
    devolverLS.forEach(item=>{
      verCarro(item)
      miCarrito.push(item)
      totalEnCarro()
    })
  }
}

comenzar()