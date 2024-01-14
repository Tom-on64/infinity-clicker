export const addNavigator = (btnWrapQ, pageWrapQ) => {
    const buttons = document.querySelector(btnWrapQ).children;
    const pages = document.querySelector(pageWrapQ).children;
    for (const btn of buttons) btn.onclick = () => {
        if (!btn.dataset.nav) return;
        hideAll(pages);
        show(btn.dataset.nav);
    }
}

const hideAll = (pages) => {
    for (const page of pages) page.classList.remove("active");
}

const show = (navItem) => {
    document.querySelector(`#${navItem}Page`).classList.add("active")
}
