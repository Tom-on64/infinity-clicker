import { infoAlert } from "./alert.js";

export const player = {
    // Savefile
    number: 0,
    npc: [1, 0, 0, 0, 0],
    nps: [0, 0, 0, 0, 0],
    shop: {
        npc: {
            cost: [50, 3500, 1e4, 2.5e5, 5e6],
            mult: [1.2, 1.3, 1.4, 1.5, 1.6],
            bought: [0, 0, 0, 0, 0], 
            dimension: 3, 
        }, 
        nps: {
            cost: [1e3, 5e3, 1.5e4, 3e5, 5e6],
            mult: [1.3, 1.4, 1.5, 1.6, 1.7],
            bought: [0, 0, 0, 0, 0], 
            dimension: 3, 
        }, 
    },
    config: {
        refreshRate: 50,
        theme: "dark", 
        // offlineProgress: true, 
        useIcons: false, 
    }, 
    timestamp: Date.now(), 

    // Methods
    save() { 
        localStorage.setItem("savefile", JSON.stringify(this)); 
        infoAlert("Saved!", 3500);
    }, 
    load() {
        const loaded = localStorage.getItem("savefile");
        if (!loaded) return;
        Object.assign(this, JSON.stringify(loaded));
        infoAlert("Loaded!", 3500);
    },
    reset() { Object.assign(this, defaultSave); }, 
}

export const defaultSave = JSON.parse(JSON.stringify(player));
