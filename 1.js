console.log("hola");

// Imagen 3
let imagen3 = document.getElementById('imagen3');
let infoCard2 = document.getElementById('infoCard2');

imagen3.addEventListener('click', () => {
  infoCard2.style.display = infoCard2.style.display === 'block' ? 'none' : 'block';
});

// Imagen 2
let imagen2 = document.getElementById('imagen2');
let infoCard1 = document.getElementById('infoCard1');

imagen2.addEventListener('click', () => {
  infoCard1.style.display = infoCard1.style.display === 'block' ? 'none' : 'block';
});

// Imagen 4
let imagen4 = document.getElementById('imagen4');
let infoCard3 = document.getElementById('infoCard3');

imagen4.addEventListener('click', () => {
  infoCard3.style.display = infoCard3.style.display === 'block' ? 'none' : 'block';
});
