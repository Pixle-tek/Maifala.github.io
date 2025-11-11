
const products = [
  { id: 1, name: "Nike Air Force 1", price: 1800, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Adidas Hoodie", price: 800, img: "https://via.placeholder.com/200" },
  { id: 3, name: "Puma Cap", price: 300, img: "https://via.placeholder.com/200" },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
// New element reference for cart details
const cartContainer = document.getElementById("cart-container");

function renderProducts() {
  productList.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>R${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  // 1. Generate HTML for each item in the cart
  const cartItemsHTML = cart.map(item => `
    <li>${item.name} - R${item.price}</li>
  `).join('');

  // 2. Calculate the total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // 3. Update the cart container with the items and total
  cartContainer.innerHTML = `
    <ul>${cartItemsHTML}</ul>
    <p><strong>Total: R${total}</strong></p>
  `;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  // Add product to the cart array
  cart.push(product); 
  // Update the count display
  cartCount.textContent = cart.length; 
  // Update the full cart detail display
  renderCart(); 
  
  // Removed alert for cleaner UX, but you can keep it if desired
  // alert(`${product.name} added to cart!`);
}

// Initial calls to render
renderProducts();
// Call renderCart to initialize the cart display (it will show 'empty')
renderCart();