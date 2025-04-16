document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-story img, .img-carrossel');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;

            // Verifica se a imagem clicada tem a classe "img-carrossel"
            if (this.classList.contains('img-carrossel')) {
                modalImg.classList.add('img-carrossel');
            } else {
                modalImg.classList.remove('img-carrossel');
            }
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});