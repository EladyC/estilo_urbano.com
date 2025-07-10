const imagen = document.getElementById('imagen');
const antes = document.getElementById('antes');
const despues = document.getElementById('despues');

const urlbase = "../img/";
const can = 10; // total de imágenes
let pos = 1;

if (antes && despues && imagen) {
  antes.addEventListener('click', function () {
    pos--;
    if (pos < 1) pos = can;
    imagen.src = urlbase + pos + ".jpg";
  });

  despues.addEventListener('click', function () {
    pos++;
    if (pos > can) pos = 1;
    imagen.src = urlbase + pos + ".jpg";
  });

  // Cambio automático
  setInterval(function () {
    despues.click();
  }, 2000);
}