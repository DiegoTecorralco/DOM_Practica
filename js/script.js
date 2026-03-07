// Primero creamos una constante y despues mandamos a traer el elemento del DOM por su ID con "getElementById", en este caso el titulo, el boton para cambiar el titulo, la lista de servicios, el boton para agregar un servicio y el boton para activar el modo obscuro.

const titulo = document.getElementById("titulo");
const btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
const listaServicios = document.getElementById("listaServicios");
const btnAgregarServicio = document.getElementById("btnAgregarServicio");
const btnModoObscuro = document.getElementById("btnModoObscuro");
const campoTexto = document.getElementById("campoTexto");
const resultado = document.getElementById("resultado");
const btnEliminarSercivio = document.getElementById("btnEliminarSercivio");

// Luego, agregamos un evento de click al boton para cambiar el titulo con un escuchador que es "addEventListener", y dentro de la funcion del evento, cambiamos el texto del titulo por "Mii sitio web Dinamico".

btnCambiarTitulo.addEventListener("click", () => {
    titulo.textContent = "Mii sitio web Dinamico";  // llamamos a la constante del titulo y cambiamos su texto con "textContent" y le asignamos el nuevo texto que queremos mostrar.
});

// Agregamos un evento de click al boton para agregar un servicio, y dentro de la funcion del evento, creamos un const  y despues creamos un nuevo elemento de lista con "createElement", le asignamos el texto del nuevo servicio con "textContent", y luego lo agregamos a la lista de servicios con "appendChild".

btnAgregarServicio.addEventListener("click", () => {
    // Solicitamos al usuario que ingrese el nombre del servicio
    const nombreServicio = prompt("Por favor, ingresa el nombre del nuevo servicio:", "nuevo servicio");
    
    // Verificamos que el usuario no haya cancelado el prompt y que haya ingresado algo
    if (nombreServicio !== null && nombreServicio.trim() !== "") {
        const nuevoServicio = document.createElement("li");
        nuevoServicio.textContent = nombreServicio; // Usamos el nombre ingresado por el usuario
        listaServicios.appendChild(nuevoServicio);
    } else if (nombreServicio !== null && nombreServicio.trim() === "") {
        // Si el usuario ingresó solo espacios en blanco
        alert("Por favor, ingresa un nombre válido para el servicio");
    }
    // Si el usuario cancela el prompt (null), simplemente no hacemos nada
});

// Agregamos un evento de click al boton para activar el modo obscuro, y dentro de la funcion del evento, agregamos o quitamos la clase "obscuro" al cuerpo del documento con "classList.toggle", lo que nos permite cambiar entre el modo claro y el modo obscuro cada vez que se hace click en el boton.

btnModoObscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-obscuro") // llamamos al cuerpo del documento con "document.body" y con "classList.toggle" agregamos o quitamos la clase "modo-obscuro" cada vez que se hace click en el boton.
}); 

// Evento para que se duplique lo que ponemos en el input en la etiqueta p

campoTexto.addEventListener("keyup", () => {
    resultado.textContent = "Escribiendo:" + campoTexto.value; // llamamos al resultado y le asignamos el valor del campo de texto cada vez que se ingresa algo en el campo de texto, con "keyup" detectamos cualquier cambio en el campo de texto al presionar una tecla y actualizamos el resultado en tiempo real.
});
// key up es un evento que se dispara cada vez que se suelta una tecla, lo que nos permite detectar cualquier cambio en el campo de texto al presionar una tecla y actualizar el resultado en tiempo real.

// Evento para eliminar el ultimo servicio
btnEliminarSercivio.addEventListener("click", ()=> {
    if(listaServicios.lastElementChild) // verificamos si hay al menos un elemento en la lista de servicios, si es asi, eliminamos el ultimo elemento de la lista con "removeChild" y "lastElementChild" para seleccionar el ultimo elemento de la lista.
        listaServicios.removeChild(listaServicios.lastElementChild) // 
})