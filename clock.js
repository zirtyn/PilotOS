function atualizarclock() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    // Atualiza o elemento HTML com o ID "clock"
    document.getElementById('clock').textContent = `${horas}:${minutos}`;
}

atualizarclock();

// atualiza a cada 1000ms (1 segundo)
setInterval(atualizarclock, 1000);   