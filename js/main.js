	//Pasos a seguir:
//Declaramos las varibles
var contenedorTareas = document.getElementById("contenedorTareas"),
	inputTarea = document.getElementById("inputTarea"),
	botonAgregar = document.getElementById("botonAgregar");

//Funcion para agregar tarea
botonAgregar.onclick = function () {								//al dar click al boton
	if (inputTarea.value == "") {
		return alert("No puedes dejar campo vacío");
	} else {
		var tareaIngresada = inputTarea.value, 						//valor de input
			nuevaTarea = document.createElement("li"),			//creamos li para añadir
			textoTarea = document.createTextNode(tareaIngresada), //creamos un nodo de texto con la info del input
			basura = document.createElement("i"),							//creamos un i para crear el basurero
			check = document.createElement("input");							//creamos checkbox

		check.setAttribute("type", "checkbox");									//agregamos atributos el checkbox
		check.setAttribute("class", "checkbox");
		nuevaTarea.appendChild(check);													//agregamos checkbox a li
		nuevaTarea.setAttribute("class", "contenedor-tareas"); //agregamos una clase al li
		nuevaTarea.appendChild(textoTarea);								//agregamos el texto al li
		contenedorTareas.appendChild(nuevaTarea);					//agregamos el li a la lista
		basura.setAttribute("class", "fa fa-trash-o icono-borrar"); //agregamos icono
		basura.setAttribute("id", "basura");							//agregamos un id al basurero para mas delante
		basura.setAttribute("aria-hidden", "true");
		nuevaTarea.appendChild(basura);					//agregamos basurero al contenedor
		inputTarea.value = "";									//limpiamos el valor del input
		basura.onclick = function () {					//para borrar al dar click al icono
			contenedorTareas.removeChild(nuevaTarea);
		};
		//check.onchange = function () {
			//nuevaTarea.textContent.strike();  // no puedo hacer funcionar el checkbox (aun)
		//};
	}
};


//puntos que faltan
// tachar el texto al hacer click en el checkbox
// agregar estilo lindos al sitio

	