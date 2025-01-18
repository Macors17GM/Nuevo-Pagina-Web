function toggleCard(imagen, infoCard) {
  imagen.addEventListener('click', () => {
    
    if (infoCard) {
      infoCard.style.display = infoCard.style.display === 'block' ? 'none' : 'block';
    }

    
    imagen.classList.toggle('amarillo');
  });
}

// Función para crear la onda amarilla dentro del botón
function crearOnda(imagen, e) {
  // Solo agregar la onda a imagen4
  if (imagen.id === 'imagen4') {
    // Obtener el botón dentro de la imagen (escondido)
    let boton = imagen.querySelector('#boton-onda');

    // Mostrar el botón (haciendo que sea visible)
    boton.style.display = 'block';

    // Crear el elemento para la onda amarilla
    let ondaAmarilla = document.createElement('div');
    ondaAmarilla.classList.add('onda-amarilla');

    // Obtener la posición del clic relativo a la imagen
    let rect = imagen.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;

    // Posicionar la onda en el lugar del clic
    ondaAmarilla.style.left = `${offsetX}px`;
    ondaAmarilla.style.top = `${offsetY}px`;

    
    boton.appendChild(ondaAmarilla);

    
    ondaAmarilla.addEventListener('animationend', () => {
      ondaAmarilla.remove();
      boton.style.display = 'none'; 
    });
  }
}


let imagen2 = document.getElementById('imagen2');
let infoCard1 = document.getElementById('infoCard1');
let imagen3 = document.getElementById('imagen3');
let infoCard2 = document.getElementById('infoCard2');
let imagen4 = document.getElementById('imagen4');
let infoCard3 = document.getElementById('infoCard3');


toggleCard(imagen2, infoCard1);
toggleCard(imagen3, infoCard2);
toggleCard(imagen4, infoCard3);


imagen4.addEventListener('click', (e) => {
  crearOnda(imagen4, e); 
});

function ocultarInfoCardConRetraso(infoCard, retraso) {
  setTimeout(() => {
    infoCard.style.display = 'none';
  }, retraso);
}

// Agregar eventos a las imágenes para mostrar y ocultar las tarjetas
imagen2.addEventListener('click', () => {
  infoCard1.style.display = 'block'; // Mostrar infoCard1
  ocultarInfoCardConRetraso(infoCard1, 5000); // Ocultarlo después de 5 segundos
});

imagen3.addEventListener('click', () => {
  infoCard2.style.display = 'block'; // Mostrar infoCard2
  ocultarInfoCardConRetraso(infoCard2, 6000); 
});

imagen4.addEventListener('click', () => {
  infoCard3.style.display = 'block'; 
  ocultarInfoCardConRetraso(infoCard3, 6500);  
});

