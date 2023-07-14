import home from "./home";
import menu from "./menu";

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => tab.addEventListener("click", openTab));

function clearContent() {
    const container = document.getElementById("content");
    container.innerHTML = "";
    container.classList.remove("home");
    container.classList.remove("menu");

    tabs.forEach(tab => tab.classList.remove("selected"));
}

function openTab() {
    let id = this.id;
    clearContent();
    this.classList.add("selected");

    if (id === "home") home.populate();
    if (id === "menu") menu.populate();
}

home.populate();