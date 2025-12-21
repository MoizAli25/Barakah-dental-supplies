// Sample product data (will later come from Laravel API)
const products = [
  { id: 1, title: "ALGINATE", category: "Consumables", price: 900, quantity: 100, total: 90000, image: "assets/images/product1.jpg", description: "Dental impression material for accurate molds." },
  { id: 2, title: "HANDPIECE HIGH SPEED", category: "Instruments", price: 2800, quantity: 10, total: 28000, image: "assets/images/product2.jpg", description: "High-speed dental handpiece for precision drilling." },
  { id: 3, title: "HANDPIECE SLOW SPEED", category: "Instruments", price: 8500, quantity: 5, total: 42500, image: "assets/images/product3.jpg", description: "Slow-speed handpiece for polishing and finishing." },
  { id: 4, title: "LATEX GLOVES SMALL", category: "Consumables", price: 900, quantity: 100, total: 90000, image: "assets/images/product4.jpg", description: "Small size latex gloves for hygienic procedures." },
  { id: 5, title: "LATEX GLOVES MEDIUM", category: "Consumables", price: 900, quantity: 100, total: 90000, image: "assets/images/product5.jpg", description: "Medium size latex gloves for hygienic procedures." },
  { id: 6, title: "STERLIZATION POUCH MEDIUM", category: "Consumables", price: 900, quantity: 50, total: 45000, image: "assets/images/product6.jpg", description: "Medium sterilization pouch for safe instrument storage." },
  { id: 7, title: "STERLIZATION POUCH SMALL", category: "Consumables", price: 500, quantity: 20, total: 10000, image: "assets/images/product7.jpg", description: "Small sterilization pouch for individual tools." },
  { id: 8, title: "STERLIZATION REELS", category: "Consumables", price: 0, quantity: 0, total: 0, image: "assets/images/product8.jpg", description: "Sterilization reels for autoclave procedures." },
  { id: 9, title: "SUCTION TIPS", category: "Accessories", price: 600, quantity: 100, total: 60000, image: "assets/images/product9.jpg", description: "Disposable suction tips for fluid removal." },
  { id: 10, title: "FACE MASK", category: "Consumables", price: 250, quantity: 20, total: 5000, image: "assets/images/product10.jpg", description: "Protective face mask for hygiene and safety." },
  { id: 11, title: "POLYTHENE GLOVES", category: "Consumables", price: 45, quantity: 100, total: 4500, image: "assets/images/product11.jpg", description: "Disposable polyethylene gloves for general use." },
  { id: 12, title: "BONDING BRUSH", category: "Consumables", price: 300, quantity: 20, total: 6000, image: "assets/images/product12.jpg", description: "Brush used for applying bonding agents." },
  { id: 13, title: "HARD PLASTER", category: "Consumables", price: 400, quantity: 150, total: 60000, image: "assets/images/product11.jpg", description: "Hard plaster for dental casts and molds." },
  { id: 14, title: "DIE STONE", category: "Consumables", price: 700, quantity: 40, total: 28000, image: "assets/images/product4.jpg", description: "High-strength stone for accurate dies." },
  { id: 15, title: "NEEDLES SMALL", category: "Consumables", price: 950, quantity: 50, total: 47500, image: "assets/images/product7.jpg", description: "Small needles for precise injections." },
  { id: 16, title: "NEEDLES BLOCK", category: "Consumables", price: 950, quantity: 50, total: 47500, image: "assets/images/product4.jpg", description: "Block of needles for dental procedures." },
  { id: 17, title: "HEAD CAPS", category: "Consumables", price: 300, quantity: 10, total: 3000, image: "assets/images/product3.jpg", description: "Disposable head caps for hygiene." },
  { id: 18, title: "GAUZE", category: "Consumables", price: 190, quantity: 100, total: 19000, image: "assets/images/product11.jpg", description: "Sterile gauze for dressing wounds." },
  { id: 19, title: "MODELLING WAX", category: "Consumables", price: 650, quantity: 20, total: 13000, image: "assets/images/product12.jpg", description: "Wax for dental modeling and impressions." },
  { id: 20, title: "ORTHO WAX", category: "Consumables", price: 100, quantity: 100, total: 10000, image: "assets/images/product8.jpg", description: "Orthodontic wax to prevent irritation." },
  { id: 21, title: "HD-CAINE INJECTION", category: "Consumables", price: 2950, quantity: 50, total: 147500, image: "assets/images/product2.jpg", description: "Local anesthetic injection for procedures." },
  { id: 22, title: "ETCHING GEL", category: "Consumables", price: 2200, quantity: 10, total: 22000, image: "assets/images/product5.jpg", description: "Etching gel for enamel preparation." },
  { id: 23, title: "BONDING AGENT", category: "Consumables", price: 2600, quantity: 10, total: 26000, image: "assets/images/product11.jpg", description: "Dental bonding agent for restorations." },
  { id: 24, title: "K-FILES", category: "Instruments", price: 350, quantity: 100, total: 35000, image: "assets/images/product1.jpg", description: "Endodontic K-files for root canal cleaning." },
  { id: 25, title: "H-FILES", category: "Instruments", price: 350, quantity: 100, total: 35000, image: "assets/images/product1.jpg", description: "H-type endodontic files for shaping canals." },
  { id: 26, title: "GUTTA PERCHA POINTS", category: "Consumables", price: 500, quantity: 100, total: 50000, image: "assets/images/product2.jpg", description: "Gutta percha points for root canal filling." },
  { id: 27, title: "PAPER POINTS", category: "Consumables", price: 550, quantity: 100, total: 55000, image: "assets/images/product3.jpg", description: "Paper points for drying canals." },
  { id: 28, title: "POLISHING PASTE", category: "Consumables", price: 1200, quantity: 10, total: 12000, image: "assets/images/product4.jpg", description: "Paste for polishing teeth and restorations." },
  { id: 29, title: "POWER WHITENING KIT", category: "Equipment", price: 9600, quantity: 5, total: 48000, image: "assets/images/product5.jpg", description: "Professional kit for tooth whitening." },
  { id: 30, title: "ULTRADENT WHITENING KIT", category: "Equipment", price: 8500, quantity: 5, total: 42500, image: "assets/images/product6.jpg", description: "Ultradent kit for effective whitening treatments." }
];

window.allProducts = products;

let cart = []; // FIXED — cart should start empty

let currentPage = 1;
const itemsPerPage = 12;

// ===========================
// Render Products
// ===========================
function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    const searchValue = document.getElementById("searchBox").value.toLowerCase();
    const categoryValue = document.getElementById("categoryFilter").value;

    const filtered = products.filter(p =>
        (p.title.toLowerCase().includes(searchValue) ||
         p.category.toLowerCase().includes(searchValue)) &&
        (categoryValue === "all" || p.category === categoryValue)
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    paginated.forEach(p => {
        container.innerHTML += `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card product-card p-2">

                <img src="${p.image}" class="card-img-top" alt="${p.title}">

                <div class="card-body">
                    <h5 class="product-title">${p.title}</h5>
                    <p class="product-category text-muted">${p.category}</p>
                    <h6 class="fw-bold">PKR ${p.price}</h6>

                    <!-- Quantity Selector -->
                    <div class="d-flex align-items-center gap-2 my-2">
                        <button class="btn btn-sm btn-outline-secondary qty-minus" data-id="${p.id}">−</button>
                        <input type="text" class="form-control text-center qty-input" value="1" data-id="${p.id}" style="width:60px;">
                        <button class="btn btn-sm btn-outline-secondary qty-plus" data-id="${p.id}">+</button>
                    </div>

                    <!-- Add to Cart Button (FIXED) -->
                    <button class="btn btn-light w-100 add-to-cart d-flex align-items-center justify-content-center gap-2" data-id="${p.id}">
                        <i class="bi bi-cart"></i> Add to Cart
                    </button>

                    <!-- View Details -->
                    <a href="product-details.html?id=${p.id}" class="btn btn-primary w-100 mt-2">View Details</a>
                </div>

            </div>
        </div>`;
    });

    renderPagination(filtered.length);
}

// ===========================
// Pagination
// ===========================
function renderPagination(totalItems) {
    const pages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= pages; i++) {
        pagination.innerHTML += `
        <li class="page-item ${i === currentPage ? 'active' : ''}">
            <a class="page-link" href="#" onclick="setPage(${i})">${i}</a>
        </li>`;
    }
}

function setPage(num) {
    currentPage = num;
    renderProducts();
}

// ===========================
// Event Listeners
// ===========================
document.getElementById("searchBox").addEventListener("keyup", renderProducts);
document.getElementById("categoryFilter").addEventListener("change", renderProducts);

// =======================
// PRODUCT CARD QUANTITY BUTTONS
// =======================
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("qty-plus")) {
        let id = e.target.getAttribute("data-id");
        let input = document.querySelector(`.qty-input[data-id="${id}"]`);
        input.value = parseInt(input.value) + 1;
    }

    if (e.target.classList.contains("qty-minus")) {
        let id = e.target.getAttribute("data-id");
        let input = document.querySelector(`.qty-input[data-id="${id}"]`);
        if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    }
});

renderProducts();

// =======================
// ADD TO CART FUNCTIONALITY (FIXED)
// =======================
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
        
        let id = parseInt(e.target.getAttribute("data-id"));
        let qty = parseInt(document.querySelector(`.qty-input[data-id="${id}"]`).value);

        let product = products.find(p => p.id === id);

        let check = cart.find(item => item.id === id);
        if (check) {
            check.qty += qty;
        } else {
            cart.push({
                id: product.id,
                name: product.title,
                price: product.price,
                qty: qty,
                img: product.image
            });
        }

        loadCart();
        alert("Added to cart!");
    }
});

// ===========================
// PRODUCT DETAIL PAGE LOGIC
// ===========================
function switchImage(src) {
    document.getElementById("mainImage").src = src;
}

// Detail page quantity
let quantity = 1;
const maxStock = 10;

document.getElementById("qtyPlus")?.addEventListener("click", () => {
    if (quantity < maxStock) {
        quantity++;
        document.getElementById("qtyInput").value = quantity;
    }
});

document.getElementById("qtyMinus")?.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        document.getElementById("qtyInput").value = quantity;
    }
});

// Toast add to cart
document.getElementById("addToCartBtn")?.addEventListener("click", () => {
    let toast = new bootstrap.Toast(document.getElementById("cartToast"));
    toast.show();
});

// ===========================
// CART PAGE FUNCTIONS
// ===========================
function loadCart() {
    const tbody = document.getElementById('cart-items');
    if (!tbody) return;

    tbody.innerHTML = "";

    cart.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td><img src="${item.img}" width="60" class="rounded"></td>
                <td>${item.name}</td>
                <td>PKR ${item.price}</td>

                <td>
                    <input type="number" min="1" value="${item.qty}" class="form-control qty-box"
                        onchange="updateQty(${item.id}, this.value)">
                </td>

                <td>PKR ${item.price * item.qty}</td>

                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button>
                </td>
            </tr>
        `;
    });

    updateTotals();
}

function updateQty(id, value) {
    const qty = parseInt(value);
    if (qty < 1) return;

    const item = cart.find(i => i.id === id);
    item.qty = qty;

    loadCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    loadCart();
}

function updateTotals() {
    if (!document.getElementById('subtotal')) return;

    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('subtotal').innerText = `PKR ${subtotal}`;
    document.getElementById('tax').innerText = `PKR ${tax}`;
    document.getElementById('total').innerText = `PKR ${total}`;

    document.getElementById('checkout-btn').disabled = cart.length === 0;
}

loadCart();

// ===========================
// LOGIN / LOGOUT LOGIC
// ===========================
const session = JSON.parse(localStorage.getItem("session"));

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const profileNav = document.getElementById("profileNav");

if (session) {
  loginBtn?.classList.add("d-none");
  logoutBtn?.classList.remove("d-none");
  profileNav?.classList.remove("d-none");
}

if (!session) {
  loginBtn?.classList.remove("d-none");
  logoutBtn?.classList.add("d-none");
  profileNav?.classList.add("d-none");
}

logoutBtn?.addEventListener("click", () => {
  localStorage.removeItem("session");
  window.location.href = "login.html";
});




















// ===================== CART SYSTEM =====================

// Get cart from localStorage or initialize empty
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = count;
}

// Add item to cart (from product-details page)
function addToCart(product) {
    let cart = getCart();

    // If item already exists → increase qty
    const index = cart.findIndex(p => p.id === product.id);

    if (index !== -1) {
        cart[index].qty += product.qty;
    } else {
        cart.push(product);
    }

    saveCart(cart);
    updateCartCount();
}

// ===================== PRODUCT-DETAILS PAGE LOGIC =====================
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addToCartBtn");

    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const qty = parseInt(document.getElementById("quantityInput").value);

            // Read product from HTML (already loaded by your script)
            const product = {
                id: selectedProduct.id,
                title: selectedProduct.title,
                price: selectedProduct.price,
                image: selectedProduct.image,
                qty: qty
            };

            addToCart(product);

            // Show your Bootstrap toast popup
            const toastElement = document.getElementById("cartToast");
            if (toastElement) {
                const toast = new bootstrap.Toast(toastElement);
                toast.show();
            }
        });
    }

    updateCartCount();
});

// ===================== CART PAGE LOADING =====================
function loadCart() {
    const cart = getCart();
    const container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        container.innerHTML += `
            <tr>
                <td><img src="${item.image}" width="50"></td>
                <td>${item.title}</td>
                <td>PKR ${item.price}</td>
                <td>
                    <input type="number" class="form-control qty-box" value="${item.qty}" min="1"
                        onchange="updateQty(${index}, this.value)">
                </td>
                <td>PKR ${itemTotal}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">X</button>
                </td>
            </tr>
        `;
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    if (document.getElementById("subtotal")) document.getElementById("subtotal").innerText = `PKR ${subtotal}`;
    if (document.getElementById("tax")) document.getElementById("tax").innerText = `PKR ${tax}`;
    if (document.getElementById("total")) document.getElementById("total").innerText = `PKR ${total}`;

    updateCartCount();
}

// ===================== UPDATE QTY =====================
function updateQty(index, qty) {
    let cart = getCart();
    cart[index].qty = parseInt(qty);
    saveCart(cart);
    loadCart();
}

// ===================== REMOVE ITEM =====================
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
}

// Auto-load cart when opening cart.html
window.onload = function () {
    loadCart();
    updateCartCount();
};

















// 🔥 Share products globally
window.allProducts = products;

// 🔥 Also expose addToCart for index.html
window.addToCart = function(item){
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find(i => i.id === item.id);
    if(existing){
        existing.qty += item.qty;
    } else {
        cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
