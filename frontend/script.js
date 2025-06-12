const products = [
  { id: 1, name: "Smartphone", price: 12000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 1500, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Shoes", price: 2500, image: "https://via.placeholder.com/150" },
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100%">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    document.getElementById("cart-total").textContent = total;
  }
}

function checkout() {
  alert("Order placed!");
  cart = [];
  updateCartCount();
  toggleCart();
}

document.getElementById("cart-icon").onclick = toggleCart;

window.onload = loadProducts;
