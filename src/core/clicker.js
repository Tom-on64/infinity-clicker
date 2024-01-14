import { input } from "./input.js";
import { player } from "./player.js";

let timestamp = 0;
let clickTimeout = 0;
const update = (time = 0) => {
    const dt = (time - timestamp) / 1000;
    timestamp = time;
    requestAnimationFrame(update);

    // Clicker update loop
    for (let i = 1; i < player.npc.length; i++) player.npc[i - 1] += player.npc[i] * dt;
    for (let i = 1; i < player.nps.length; i++) player.nps[i - 1] += player.nps[i] * dt;
    player.number += player.nps[0] * dt;

    // Keybinds
    if (input[" "] && clickTimeout <= 0) { click(); clickTimeout = 70 }
    else if (clickTimeout > 0) clickTimeout -= dt * 1000;
}

export const click = () => {
    player.number += player.npc[0];
}

export const init = () => {
    document.getElementById("clickBtn").onclick = click;

    update();
}
