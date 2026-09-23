async function carregarRadios() {
            const response = await fetch(
                "https://de1.api.radio-browser.info/json/stations/search?country=Brazil&hidebroken=true&limit=20"
            );

            const radios = await response.json();

            console.log(radios);
        }

carregarRadios();

const radios = [
    {
        name: "Rádio Exemplo",
        genre: "Pop",
        frequency: "96.5 FM",
        image: "images/radio-default.png"
    },

    {
        name: "Rádio Brasil",
        genre: "Sertanejo",
        frequency: "98.1 FM",
        image: "images/radio-default.png"
    },

    {
        name: "Rádio Rock",
        genre: "Rock",
        frequency: "101.7 FM",
        image: "images/radio-default.png"
    }
];
const container = document.getElementById("radio-container");

radios.forEach(radio => {

    const card = document.createElement("div");

    card.classList.add("radio-card");

    card.innerHTML = `
        <img src="${radio.image}" alt="${radio.name}">

        <h3>${radio.name}</h3>

        <p>${radio.genre}</p>
    `;

    card.addEventListener("click", () => {
        tocarRadio(radio);
    });

    container.appendChild(card);
});