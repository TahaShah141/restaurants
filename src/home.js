function populate() {
    const container = document.getElementById("content");
    container.classList.add("home");
    container.innerHTML = '<div class="welcome"><h1>Welcome</h1><p>The people at Pizza Shah welcome you to not only just a great meal, but also a great experience. We cater to the most prestigious of customers and serve the best pizza in town. But you don\'t have to take our word for it, come on up and find out !</p><hr><p class="sub">For more information, please visit the contact tab on top. <br>To look at our menu and the variety of choices we offer, you have the menu tab.</p></div>'
}

export default {populate};