Como ocultar y mostrar elementos de DOM:

$(selector).hide() // oculta (display:none)
$(selector).show() // muestra (quita el display:none)

$(selector).toggle() // Si esta visible lo oculta y si esta oculto lo muestra

Evento keyup: Cada vez que el usuario ingresa un letra se dispara el evento y realizo una accion.

$("#buscadorNoticias").on("keyup", function() {

	//console.log($("#buscadorNoticias").val());

});

Evento change: Cada vez que cambia el valor del select se dispara el evento y se realiza la accion.

$("#filtroCategoria").on("change", function () {

	console.log($("#filtroCategoria").val());

});

Desvincular un evento de un elemento

El formato es:

elemento.off("evento");

Ejemplo:

boton.off("click"); // Al hacer esto el boton ya no ejecutara la accion que alguna vez le vinculamos

Vincular informacion a eventos: Aprendimos a vincular eventos a elementos y ejecutar una accion.
Ademas de esto, existe la posibilidad que, al vincular el evento al elemento también pasarle información:

El formato es:

elemento.on("evento", informacion, accion);

Ejemplo

var noticia = {titulo: "Cambio climatico"};


// Lo que se agrega es:
// El objeto literal {noticia: noticia}
// El parametro evento en la funcion.
boton.on("click", {noticia: noticia} , function (evento) {

	// El objeto literal queda disponible para usar dentro de evento.data
	// Para ver un uso de esto fijarse en script.js linea 175.
	console.log(evento.data.noticia.titulo);

});






})
