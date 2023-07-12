import home from "./home";
import menu from "./menu";
import contact from "./contact";

function clearContent() {
    const container = document.getElementById("content");
    container.innerHTML = "";
}

home.populate();