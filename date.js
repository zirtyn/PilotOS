// Obtém a data atual
const data = new Date();

// Formata para dd/mm
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0

const dataFormatada = `${dia}/${mes}`;

// Insere no elemento HTML
document.getElementById('date').textContent = dataFormatada;   