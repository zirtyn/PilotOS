// Selecionar elementos
const btnAbrir = document.getElementById('btnAbrirVolume');
const popup = document.getElementById('popupVolume');
const closeBtn = document.querySelector('.close-btn');
const slider = document.getElementById('sliderVolume');
const valorDisplay = document.getElementById('valorVolume');

// Abrir o popup
btnAbrir.addEventListener('click', () => {
    // popup.style.display = 'flex';
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
});

// Fechar o popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Ajustar o volume
slider.addEventListener('input', (e) => {
    const volume = e.target.value;
    valorDisplay.textContent = `${Math.round(volume * 100)}%`;
    
    // Aplicar volume ao elemento desejado
    // Exemplo 1: Volume global (aplica ao body ou elementos de áudio)
    document.body.volume = volume; 
    
    // Exemplo 2: Se tiver um elemento de áudio específico, use:
    // const audio = document.querySelector('audio');
    // if(audio) audio.volume = volume;
});   


