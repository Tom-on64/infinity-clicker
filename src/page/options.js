import { player } from "../core/player.js";

export const setupOptions = () => {
    document.getElementById("updateRate").onchange = (e) => {
        document.getElementById("updateRateLabel").innerText = `Update Rate: ${e.target.value}ms`;
        player.config.refreshRate = e.target.value;
    }
}
