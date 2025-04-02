// Obtém os elementos
var modal = document.getElementById("videoModal");
var iframe = document.getElementById("videoIframe");
var photos = document.querySelectorAll(".foto-player");
var closeBtn = document.getElementsByClassName("close")[0];

// Quando qualquer foto for clicada, abre o modal com o vídeo correspondente
photos.forEach(function(photo) {
    photo.onclick = function() {
        var videoId = photo.getAttribute("data-video-id");
        iframe.src = "https://player.vimeo.com/video/" + videoId + "?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479";
        modal.style.display = "block";
    };
});

// Quando o botão de fechar for clicado, fecha o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    iframe.src = ""; // Remove o vídeo para evitar que continue tocando
}

// Quando clicar fora do modal, também fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = ""; // Remove o vídeo
    }
}
