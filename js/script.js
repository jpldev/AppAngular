$(function(){
	var campoTexto = $("#nombre");
	var titular = $("h1");
	campoTexto.on("keyup",function(){
		titular.text("Hola " + campoTexto.val());
	});
});