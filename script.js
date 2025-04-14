let score = 0;
let upgrades = {
    clickPower: 1,
    autoIncome: 0,
};

const scoreElement = document.getElementById("score");
const clickButton = document.getElementById("click-button");
const shopElement = document.getElementById("items");
const modMenu = document.getElementById("mod-menu");
const modMenuButton = document.getElementById("mod-menu-button");

const items = [
    { name: "Lepsze kliknięcia", cost: 10, effect: () => upgrades.clickPower++ },
    { name: "Automatyczne dochody", cost: 50, effect: () => upgrades.autoIncome += 1 },
    { name: "Bank (odsetki)", cost: 100, effect: () => setInterval(() => score += Math.floor(score * 0.05), 10000) },
];

function updateScore() {
    scoreElement.textContent = `Punkty: ${score}`;
}

function buyItem(index) {
    const item = items[index];
    if (score >= item.cost) {
        score -= item.cost;
        item.effect();
        item.cost = Math.floor(item.cost * 1.5); // zwiększ koszt
        renderShop();
        updateScore();
    }
}

function renderShop() {
    shopElement.innerHTML = "";
    items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - Koszt: ${item.cost}`;
        const buyButton = document.createElement("button");
        buyButton.textContent = "Kup";
        buyButton.onclick = () => buyItem(index);
        itemDiv.appendChild(buyButton);
        shopElement.appendChild(itemDiv);
    });
}

clickButton.addEventListener("click", () => {
    score += upgrades.clickPower;
    updateScore();
});

modMenuButton.addEventListener("click", () => {
    modMenu.classList.remove("hidden");
});

document.getElementById("add-points").addEventListener("click", () => {
    score += 1000;
    updateScore();
});

document.getElementById("unlock-all").addEventListener("click", () => {
    items.forEach(item => item.effect());
    renderShop();
});

document.getElementById("close-mod-menu").addEventListener("click", () => {
    modMenu.classList.add("hidden");
});

setInterval(() => {
    score += upgrades.autoIncome;
    updateScore();
}, 1000);

renderShop();
updateScore();

// Rejestracja Service Workera
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => console.log('Service Worker zarejestrowany!'))
        .catch(error => console.error('Błąd rejestracji Service Workera:', error));
}
