// Selecionar elementos
const blueAbrir = document.getElementById('btnAbrirBluetooth');
const popupBluetooth = document.getElementById('popupBluetooth');
const closeBlue = document.querySelector('.close-blue');

// Abrir o popup
blueAbrir.addEventListener('click', () => {
    // popupBluetooth.style.display = 'flex';
    if (popupBluetooth.style.display === 'flex') {
        popupBluetooth.style.display = 'none';
    } else {
        popupBluetooth.style.display = 'flex';
    }
});

// Fechar o popup
closeBlue.addEventListener('click', () => {
    popupBluetooth.style.display = 'none';
});

// Fechar ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === popupBluetooth) {
        popupBluetooth.style.display = 'none';
    }
});