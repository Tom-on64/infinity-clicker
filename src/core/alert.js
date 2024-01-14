const alertWrapper = document.getElementById("alert");

const createAlert = (message, id, timeout) => {
    const alert = document.createElement("div");
    const removeAlert = () => { 
        alert.classList.add("hidden");
        setTimeout(() => alert.remove(), 500); 
    }
    alert.id = id;
    alert.innerText = message;
    alert.classList.add("hidden");
    alert.onclick = removeAlert;
    setTimeout(removeAlert, timeout);
    alertWrapper.appendChild(alert);
    alert.classList.remove("hidden");
}

export const infoAlert = (message, timeout) => { createAlert(message, "info", timeout); }
export const warningAlert = (message, timeout) => { createAlert(message, "warning", timeout); }
export const errorAlert = (message, timeout) => { createAlert(message, "error", timeout); }