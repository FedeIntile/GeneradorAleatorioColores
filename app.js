// Seleccionar elementos del DOM

const boton = document.querySelector('button'); //querySelector selecciona la primera etiqueta HTML que le indiquemos 

const color = document.getElementById('color'); // getElementeById selecicona el contenido que este dentro de las etiquetas 

// función que crea el color aleatorio

function generarColorHexAleatorio(){

  let digitos = '0123456789abcdef'; // todos los digitos que puede tener un color hexadecimal 
  let colorhex = '#'; // variable que almacenera los digitos del color Hexadecimal

  for(let i = 0; i< 6; i++){
    let indiceAleatorio = Math.floor(Math.random()*16); // nunca sale 16, necesitamos solo hasta el 15, que es maximo valor hexadecimal
    colorhex +=  digitos[indiceAleatorio]; 
  }
  return colorhex
}

boton.addEventListener('click', function(){
let colorAleatorio = generarColorHexAleatorio();
// actualiza el texto
color.textContent = colorAleatorio;
// actualiza el color de fondo
document.body.style.backgroundColor = colorAleatorio; 

})



