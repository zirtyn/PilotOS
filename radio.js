async function carregarRadios() {

    const loading = document.getElementById("radio-loading");
    const container = document.getElementById("radio-container");

    try {
        const response = await fetch("https://de1.api.radio-browser.info/json/stations/search?country=Brazil&hidebroken=true&limit=20");

        const radios = await response.json();

        radios.forEach(radio => {
            const card = document.createElement("div");

            card.classList.add("radio-card");

            card.innerHTML = `
                <img 
                    src="${radio.favicon || "images/radio-default.png"}" 
                    alt="${radio.name}"
                >

                <h3>${radio.name}</h3>

                <p>${radio.tags || "Gênero indefinido"}</p>
            `;

            card.addEventListener("click", () => {
                tocarRadio(radio);
                atualizarRadioAtual(radio);
            });

            container.appendChild(card);
        });

  } catch (error) {

        console.error("Erro ao carregar rádios:", error);

    } finally {

        // remove o loading independentemente de ter dado certo ou errado
        loading.remove();
    }




function tocarRadio(radio) {
    const player = document.getElementById("radio-player");

    player.src = radio.url_resolved;
    player.play();
};

function atualizarRadioAtual(radio) {

    document.getElementById("now-playing").innerHTML =`
            <h2>Tocando agora:</h2>
            <img 
                src="${radio.favicon || "images/radio-default.png"}"
                alt="${radio.name}">

            <div id="txt-dados">
                <h3>${radio.name}</h3>
                <p>${radio.tags || "Gênero indefinido"}</p>
            </div>
            <button id="play-button">⏸</button>
        `;

    console.log("Tocando:", radio.name);
    console.log("Stream:", radio.url_resolved);

    const audio = document.querySelector('audio'); 
    const button = document.getElementById("play-button"); 

    button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        button.textContent = '⏸';
    } else {
        audio.pause();
        button.textContent = '▶';
    }
    })
}};

carregarRadios();
