import { init } from "./core/clicker.js";
import { setupInput } from "./core/input.js";
import { addNavigator } from "./page/navigator.js";
import { setupOptions } from "./page/options.js";
import { renderLoop } from "./page/render.js";
import { player } from "./core/player.js";
import { setupShops } from "./core/shop.js";

player.load();
addNavigator("nav", "#content"); // Main nav
addNavigator("#shopNav", "#shopWrapper"); // Shop nav
setupShops(); 
init(); // Init clicker logic
renderLoop(); // Init renderer
setupOptions();
setupInput();

setInterval(() => player.save(), 15000);
