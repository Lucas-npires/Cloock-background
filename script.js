const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const img = document.getElementById('imagem');

const relogio = setInterval(function time() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hora < 10) {
        hora = '0' + hora;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (seg < 10) {
        seg = '0' + seg;
    }

    if (hora >= 6 && hora < 17) {
        img.src = 'dia.jpg'; 
    } 
    if (hora > 0 && hora < 5  || hora > 19 && hora < 5) {
        img.src = 'noite.jpg';
    }
    else {
        img.src = 'final-de-tarde.jpg';
    }

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg;
})