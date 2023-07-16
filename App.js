console.log("hello");
let products = [
  {
    img: "./product1.png",
    tag: "NATURE WATERMELON",
    price: "$43.00",
  },
  {
    img: "./product2.png",
    tag: "FRESH APPLE",
    price: "$51.00",
  },

  {
    img: "./product3.png",
    tag: "FRESH BROCCOLI",
    price: "$47.00",
  },
  {
    img: "./product4.png",
    tag: "NATURAL ORANGE",
    price: "$42.00",
  },
  {
    img: "./product5.png",
    tag: "FRESH GRAPES",
    price: "$51.00",
  },
  {
    img: "./product6.png",
    tag: "GREEN LEMON",
    price: "$38.00",
  },
  {
    img: "./product7.png",
    tag: "GREEN APPLE",
    price: "$39.00",
  },
  {
    img: "./product8.png",
    tag: "NATURE PUMPKIN",
    price: "$46.00",
  },
];
let cards = document.querySelector(".cards");
cards.innerHTML = "";
products.forEach((p) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="product-img">
    <a href="#">
      <img src=${p.img} alt="" />
    </a>
  </div>
  <div class="product-text">
    <h4>${p.tag}</h4>
  </div>
  <p class="product-price">${p.price}</p>`;
  document.querySelector(".cards").append(card);
});
