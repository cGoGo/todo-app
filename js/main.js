	//Pasos a seguir:
//Declaramos las varibles
var contenedorTareas = document.getElementById("contenedorTareas"),
	inputTarea = document.getElementById("inputTarea"),
	botonAgregar = document.getElementById("botonAgregar");

//Funcion para agregar tarea
var agregarTarea = function () {
	var tareaIngresada = inputTarea.value, 						//valor de input
		nuevaTarea = document.createElement("li"),			//creamos li para añadir
		textoTarea = document.createTextNode(tareaIngresada); //creamos un noto de texto con la info del input
	nuevaTarea.appendChild(textoTarea);								//agregamos el texto al li
	contenedorTareas.appendChild(nuevaTarea);					//agregamos el li a la lista
};

//al hacer "click" al boton, llamamos a la funcion
botonAgregar.addEventListener("click", agregarTarea);