// script.js
const container = document.querySelector('.container-planos'); // Corrigido para '.container-planos'

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se não estiver pressionado, não faz nada
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Aumenta a velocidade do arrasto
    container.scrollLeft = scrollLeft - walk;
});