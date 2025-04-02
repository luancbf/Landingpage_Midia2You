document.addEventListener("DOMContentLoaded", () => {
    let startX = 0;
    let endX = 0;
    const radios = document.querySelectorAll('input[name="radio-btn-story"]');
    const slides = document.querySelector('.slides-planos-story');

    slides.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    slides.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50; // Distância mínima para considerar swipe
        let checkedIndex = Array.from(radios).findIndex(radio => radio.checked);

        if (startX - endX > threshold && checkedIndex < radios.length - 1) {
            radios[checkedIndex + 1].checked = true;
        } else if (endX - startX > threshold && checkedIndex > 0) {
            radios[checkedIndex - 1].checked = true;
        }
    }
});