
//Pasos a seguir:
//1.- Creamos el elemento (createElement)
var contTarea = document.createElement("li");

//2.- Creamos el contenido, nodo de texto (createTextNode)
var texto = document.getElementById("tareaIngresada");
var textoTarea = document.createTextNode(texto.value);

//3.- Añadimos el nodo de texto al elemnto que creamos (appendChild)
contTarea.appendChild(textoTarea);

//4.- Agregamos el elemento al DOM (llamamos al padre por el Id y agre-
//		gamos el elemento)
document.getElementById("contenedor-tareas").appendChild(contTarea);
