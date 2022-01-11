let button = document.getElementById('btn');

button.onclick = function(){
    console.log("Evento on CLick");
}
button.onmouseover = () => console.log("Evento on Over");