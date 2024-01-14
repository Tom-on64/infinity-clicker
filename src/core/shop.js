import { defaultSave, player } from "./player.js";

export const setupShops = () => {
    setupShop("#npcPage > #wrapper");
    setupShop("#npsPage > #wrapper");

    // Dimesion upgrades
    for (const upgrade of document.querySelectorAll("#dimensionUpgrade")) {
        const shopItem = upgrade.dataset.item;
        const dim = player.shop[shopItem].dimension;
        upgrade.querySelector("button").onclick = () => {
            if (player[shopItem][dim-1] < 10) return;

            const newDim = player.shop[shopItem].dimension + 1;
            player.number = defaultSave.number;
            player.npc = defaultSave.npc;
            player.nps = defaultSave.nps;
            player.shop.npc = defaultSave.shop.npc;
            player.shop.nps = defaultSave.shop.nps;
            player.shop[shopItem].dimension = newDim; 
        }
    }
}

export const setupShop = (shopWrapperQ) => {
    const wrapper = document.querySelector(shopWrapperQ);
    const items = wrapper.children;
    const shopItem = wrapper.dataset.item;

    for (const item of items) {
        const shopIndex = item.dataset.index;
        const btn = item.querySelector("button");

        btn.onclick = () => buyItem(shopItem, shopIndex);
    }
}

export const buyItem = (item, index) => {
    const cost = player.shop[item].cost[index];
    if (player.number < cost) return;
    player.number -= cost;
    player.shop[item].cost[index] *= player.shop[item].mult[index];
    player.shop[item].bought[index]++;
    player[item][index]++;
}
