function toggleCard(imagen, infoCard) {
  imagen.addEventListener('click', () => {
    if (infoCard) {
      infoCard.style.display = infoCard.style.display === 'block' ? 'none' : 'block';
    }
    imagen.classList.toggle('amarillo');
  });
}


function crearOnda(imagen, e) {
  
  let ondaAmarilla = document.createElement('div');
  ondaAmarilla.classList.add('onda-amarilla');

  
  let rect = imagen.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;
  let offsetY = e.clientY - rect.top;

  
  ondaAmarilla.style.left = `${offsetX - 20}px`; 
  ondaAmarilla.style.top = `${offsetY - 20}px`;  
  
  imagen.appendChild(ondaAmarilla);
  
  ondaAmarilla.addEventListener('animationend', () => ondaAmarilla.remove());
}


function ocultarInfoCardConRetraso(infoCard, retraso) {
  setTimeout(() => {
    infoCard.style.display = 'none';
  }, retraso);
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

[imagen2, imagen3, imagen4].forEach(imagen => {
  imagen.addEventListener('click', (e) => {
    crearOnda(imagen, e); 
  });
});

imagen2.addEventListener('click', () => {
  infoCard1.style.display = 'block';
  ocultarInfoCardConRetraso(infoCard1, 7000);
});

imagen3.addEventListener('click', () => {
  infoCard2.style.display = 'block';
  ocultarInfoCardConRetraso(infoCard2, 7200);
});

imagen4.addEventListener('click', () => {
  infoCard3.style.display = 'block';
  ocultarInfoCardConRetraso(infoCard3, 7300);
});
function toggleDarkMode() {
  document.body.classList.toggle('modo-oscuro'); // Alterna la clase 'modo-oscuro' en el cuerpo
}


