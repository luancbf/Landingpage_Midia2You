document.addEventListener('click', function(event) {
    if (event.target.classList.contains('img-static')) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = "flex";
        modalImg.src = event.target.src;
    }
});

document.getElementById('closeModal').onclick = function () {
    document.getElementById('modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target.id === 'modal') {
        document.getElementById('modal').style.display = "none";
    }
};
