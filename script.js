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

// --- OBSŁUGA INTERAKTYWNEGO SUWAKA PRZED / PO ---
let activeContainer = null;

function startDrag(e, element) {
    activeContainer = element.parentElement;
    e.preventDefault();
}

function startDragTouch(e, element) {
    activeContainer = element.parentElement;
}

window.addEventListener('mouseup', () => {
    activeContainer = null;
});

window.addEventListener('touchend', () => {
    activeContainer = null;
});

window.addEventListener('mousemove', (e) => {
    if (!activeContainer) return;
    updateSliderPosition(e.clientX, activeContainer);
});

window.addEventListener('touchmove', (e) => {
    if (!activeContainer) return;
    if (e.touches && e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX, activeContainer);
    }
});

function moveSlider(e, container) {
    updateSliderPosition(e.clientX, container);
}

function moveSliderTouch(e, container) {
    if (e.touches && e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX, container);
    }
}

function updateSliderPosition(clientX, container) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    
    let percent = (x / rect.width) * 100;
    
    const beforeWrapper = container.querySelector('.ba-before-wrapper');
    const handle = container.querySelector('.ba-slider-handle');
    
    if (beforeWrapper && handle) {
        beforeWrapper.style.width = percent + '%';
        handle.style.left = percent + '%';
    }
}
