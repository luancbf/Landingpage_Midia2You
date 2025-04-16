function initSwipeSlider({ slideSelector, radioName }) {
    let startX = 0;
    let endX = 0;

    const radios = document.querySelectorAll(`input[name="${radioName}"]`);
    const slides = document.querySelector(slideSelector);

    if (!slides || radios.length === 0) return;

    slides.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    slides.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        let checkedIndex = Array.from(radios).findIndex(radio => radio.checked);

        if (startX - endX > threshold && checkedIndex < radios.length - 1) {
            radios[checkedIndex + 1].checked = true;
        } else if (endX - startX > threshold && checkedIndex > 0) {
            radios[checkedIndex - 1].checked = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initSwipeSlider({
        slideSelector: ".slides-story",
        radioName: "radio-btn-story"
    });

    initSwipeSlider({
        slideSelector: ".slides-planos",
        radioName: "radio-btn"
    });

    initSwipeSlider({
        slideSelector: ".slides-reels",
        radioName: "radio-btn-reels"
    });
});
