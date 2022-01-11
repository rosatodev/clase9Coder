// Aca definis el boton como variable.
// Buscas al boton por su id para poder asignarlo a la vble
let button = document.getElementById('btn');

// Aca le asignas titulo al boton, osea texto bb
button.innerText = 'Ingresa a la plataforma';

// Aca le asignas un evento, en este caso cuando hagas click hace algo y ese algo es la funcion anonima del 2do parametro.
button.addEventListener('click',function(){
    // Defininimos como k H2 y lo buscamos por su id como hiciste con el btn
    const h2 = document.getElementById('title');
    // Ahora le asignas el texto 
    h2.innerHTML = 'Bienvenidos a la clase de Eventos';
    // Ahora buscas el contenedor (div) por su id
    let contenedor = document.getElementById('contenedor');
    // Bueno ya casi, ahora creamos un parrafo con el createElement y le pasas la etiqueta de HTML que queres crear
    const paragraph = document.createElement('p');
    // Bueno aca le asignas el texto como hicimos antes
    paragraph.innerHTML = 'Esta es la clase numero 9 de JS';
    
    // Y ADENTRO del contenedor metes el parrafo, eso pasa con el appendChild, basicamente le dice: ey soy la raiz del arbol y el nodo q esta abajo mio es el child q vas a pasar por parametro. Y eso lo mete abajo en el html, si? bueno tkm
    contenedor.appendChild(paragraph);
})

/* 
button.onclick = function(){
    console.log("Evento on CLick");
}
button.onmouseover = () => console.log("Evento on Over");
*/