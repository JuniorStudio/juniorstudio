// Obsługa modala powiększenia grafiki (ultra HD / podgląd)
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Zamknięcie modala po kliknięciu klawisza ESC
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});