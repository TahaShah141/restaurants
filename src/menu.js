const menuItems = [];
const titles = ["Pepperoni", "Tikka", "Fajita", "B-B-Q", "Cheese Lover", "Veggie"];
const prices = [1000, 1100, 1100, 1200, 1000, 900];
const descriptions = [
    "Layered with our special pizza sauce and topped with cheese and pepperonis, this pizza is a go-to for those looking for a snack or those seeking consistency.",
    "Adding a desi touch to pizza, the chicken is marinated in tikka masala and cooked over the grill till perfection. It's a must try.",
    "Who doesn't love some extra veggies along with grilled chicken on their pizza. For those that prefer a little more crunch to their bites.",
    "The BBQ pizza is our specialty, with pieces of chicken roasted on top of blazing hot coal, you'll be sure to feel the taste of cooked perfection in your mouth.",
    "Some folks out there don't consider it a pizza without the cheese dripping down each slice. Well, look no further...with double the cheese, you won't be disappointed.",
    "The name suggests what's inside, this pizza is a simple one, topped with vegetables and cheese.<br> *No chicken included"];

class Item {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

function populate() {
    const container = document.getElementById("content");
    container.classList.add("menu")

    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement("div");
        menuItem.classList.add("item");
        
        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = titles[i];
        menuItem.appendChild(title);

        let desc = document.createElement("p");
        desc.classList.add("desc");
        desc.innerHTML = descriptions[i];
        menuItem.appendChild(desc);

        let price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Rs. ${prices[i]}`;
        menuItem.appendChild(price);

        container.appendChild(menuItem);
    }

}

export default {populate};