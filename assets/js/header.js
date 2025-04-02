(function() {
    // Seleciona o botão hamburger e o menu de navegação
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav ul');

    // Verifica se os elementos existem antes de adicionar o evento
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
})();