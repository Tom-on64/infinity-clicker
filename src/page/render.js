import { player } from "../core/player.js";
import { formatNumber } from "../utils/format.js";

const pageTitle = document.getElementById("title");
const numberDisplay = document.getElementById("numberDisplay");
const npcShopWrapper = document.querySelector("#npcPage #wrapper");
const npcShopItems = npcShopWrapper.children;
const npsShopWrapper = document.querySelector("#npsPage #wrapper");
const npsShopItems = npsShopWrapper.children;

const render = () => {
    numberDisplay.innerText = formatNumber(player.number);
    pageTitle.innerText = `Infinity Clicker | ${formatNumber(player.number) }`;
    renderShop(npcShopWrapper, npcShopItems);
    renderShop(npsShopWrapper, npsShopItems);

    for (const upgrade of document.querySelectorAll("#dimensionUpgrade")) {
        const shopItem = upgrade.dataset.item;
        const btn = upgrade.querySelector("button");
        const dim = player.shop[shopItem].dimension;
        if (dim >= 5) {
            btn.disabled = true;
            btn.innerText = "Do nothing";
            upgrade.querySelector("#info").innerText = `Current dimension: ${dim}`;
            upgrade.querySelector("#req").innerHTML = `No more dimension available!`;
            return;
        }
        upgrade.querySelector("#info").innerText = `Current dimension: ${dim}`;
        upgrade.querySelector("#req").innerHTML = `Requires: 10 ${shopItem.toUpperCase()}<sup>${dim}</sup>`;
        if (player[shopItem][dim - 1] >= 10) btn.classList.add("available");
        else btn.classList.remove("available");
    }
}

const renderShop = (shopWrapper, shopItems) => {
    for (const item of shopItems) {
        const shopItem = shopWrapper.dataset.item;
        const shopIndex = item.dataset.index;
        const btn = item.querySelector("button");

        if (shopIndex > player.shop[shopItem].dimension - 1) item.classList.add("locked");
        else item.classList.remove("locked");

        const amount = player[shopItem][shopIndex];
        const bought = player.shop[shopItem].bought[shopIndex];
        const cost = player.shop[shopItem].cost[shopIndex];

        item.querySelector("#info").innerText = `Amount: ${formatNumber(amount)}\nBought: ${formatNumber(bought)}`;
        item.querySelector("button").innerText = `Buy\nCost: ${formatNumber(cost)}`;

        if (player.number >= cost) btn.classList.add("available");
        else btn.classList.remove("available");
    }
}

let timer = 0;
let timestamp = 0;
export const renderLoop = (time = 0) => {
    const dt = time - timestamp;
    timestamp = time;
    requestAnimationFrame(renderLoop);

    if (timer >= player.config.refreshRate) {
        timer = 0;
        render();
    } else timer += dt;
}
