export const input = {};

export const setupInput = () => {
    document.onkeydown = (e) => input[e.key] = true;
    document.onkeyup = (e) => input[e.key] = false;
}
