// Sample product data (will later come from Laravel API)
const products = [
    { id: 1, title: "Dental Mirror", category: "Instruments", price: 12.99, image: "assets/images/product1.jpg" },
    { id: 2, title: "Surgical Gloves", category: "Consumables", price: 8.50, image: "assets/images/product2.jpg" },
    { id: 3, title: "Scaler Set", category: "Instruments", price: 34.99, image: "assets/images/product3.jpg" },
    { id: 4, title: "Dental Chair Light", category: "Equipment", price: 259.99, image: "assets/images/product4.jpg" },
    { id: 5, title: "Face Mask Pack", category: "Consumables", price: 6.99, image: "assets/images/product5.jpg" },
    { id: 6, title: "X-Ray Sensor Sleeve", category: "Accessories", price: 18.50, image: "assets/images/product6.jpg" }
];

let currentPage = 1;
const itemsPerPage = 6;

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
            <div class="card product-card">
                <img src="${p.image}" class="card-img-top" alt="${p.title}">
                <div class="card-body">
                    <h5 class="product-title">${p.title}</h5>
                    <p class="product-category">${p.category}</p>
                    <h6 class="fw-bold">$${p.price.toFixed(2)}</h6>
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

renderProducts();


// ===========================
// PRODUCT DETAIL PAGE LOGIC
// ===========================

// Switch main image when thumbnail is clicked
function switchImage(src) {
    document.getElementById("mainImage").src = src;
}

// Quantity selector
let quantity = 1;
const maxStock = 10; // Later will come from Laravel

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

// Add to cart
document.getElementById("addToCartBtn")?.addEventListener("click", () => {
    let toast = new bootstrap.Toast(document.getElementById("cartToast"));
    toast.show();
});
// Dummy cart products (replace with backend later)
let cart = [
    {
        id: 1,
        name: "Dental Mirror",
        price: 500,
        qty: 2,
        img: "assets/images/mirror.jpg"
    },
    {
        id: 2,
        name: "Surgical Gloves",
        price: 1200,
        qty: 1,
        img: "assets/images/gloves.jpg"
    }
];

function loadCart() {
    const tbody = document.getElementById('cart-items');
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
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('subtotal').innerText = `PKR ${subtotal}`;
    document.getElementById('tax').innerText = `PKR ${tax}`;
    document.getElementById('total').innerText = `PKR ${total}`;

    document.getElementById('checkout-btn').disabled = cart.length === 0;
}

loadCart();









