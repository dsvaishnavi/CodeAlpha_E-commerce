const products = [
  {
    id: 1,
    name: "Redmi Note 13",
    price: 12999,
    image: "https://via.placeholder.com/200x150?text=Phone",
    description: "6.67'' AMOLED, 128GB Storage, 5000mAh Battery"
  },
  {
    id: 2,
    name: "boAt Airdopes 141",
    price: 1099,
    image: "https://via.placeholder.com/200x150?text=Earbuds",
    description: "42Hrs Playback, ASAP Charge, ENx™ Tech"
  },
  {
    id: 3,
    name: "Nike Running Shoes",
    price: 3299,
    image: "https://via.placeholder.com/200x150?text=Shoes",
    description: "Lightweight, Breathable, Stylish"
  }
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onclick="viewProduct(${product.id})"/>
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.classList.toggle("hidden");

  const itemsContainer = document.getElementById("cart-items");
  itemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    itemsContainer.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").textContent = total;
}

function checkout() {
  alert("Order placed successfully!");
  cart = [];
  document.getElementById("cart-count").textContent = 0;
  toggleCart();
}

function viewProduct(id) {
  const product = products.find(p => p.id === id);
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-price").textContent = `Price: ₹${product.price}`;
  document.getElementById("modal-product-description").textContent = product.description;
  document.getElementById("modal-product-image").src = product.image;
  toggleProductModal();
}

function toggleProductModal() {
  document.getElementById("product-modal").classList.toggle("hidden");
}

window.onload = loadProducts;
