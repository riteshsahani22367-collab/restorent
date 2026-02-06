// ---------------------
// Table number from URL
// ---------------------
const params = new URLSearchParams(window.location.search);
const table = params.get("table") || "1";
document.getElementById("tableText").innerText = `Table: ${table}`;
document.getElementById("checkoutTable").innerText = table;

// ---------------------
// 50 items (URL images)
// ---------------------
const MENU = [
  { id: 1, name: "Margherita Pizza", price: 199, img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=60" },
  { id: 2, name: "Farmhouse Pizza", price: 299, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be6c?auto=format&fit=crop&w=900&q=60" },
  { id: 3, name: "Paneer Tikka Pizza", price: 329, img: "https://images.unsplash.com/photo-1601924638867-3ec4d58d76d1?auto=format&fit=crop&w=900&q=60" },
  { id: 4, name: "Veg Burger", price: 129, img: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=60" },
  { id: 5, name: "Cheese Burger", price: 159, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=60" },
  { id: 6, name: "French Fries", price: 89, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=60" },
  { id: 7, name: "Cold Coffee", price: 99, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=60" },
  { id: 8, name: "Masala Tea", price: 20, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=60" },
  { id: 9, name: "Cappuccino", price: 120, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=60" },
  { id: 10, name: "Paneer Butter Masala", price: 249, img: "https://images.unsplash.com/photo-1604908554162-45fce27f4c92?auto=format&fit=crop&w=900&q=60" },

  { id: 11, name: "Dal Tadka", price: 179, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=60" },
  { id: 12, name: "Jeera Rice", price: 129, img: "https://images.unsplash.com/photo-1604909052718-8c6f3b4f1f0a?auto=format&fit=crop&w=900&q=60" },
  { id: 13, name: "Veg Biryani", price: 199, img: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8d?auto=format&fit=crop&w=900&q=60" },
  { id: 14, name: "Chicken Biryani", price: 279, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=60" },
  { id: 15, name: "Butter Naan", price: 35, img: "https://images.unsplash.com/photo-1626078298476-2f1c9e8a4b9c?auto=format&fit=crop&w=900&q=60" },
  { id: 16, name: "Tandoori Roti", price: 20, img: "https://images.unsplash.com/photo-1626078298476-2f1c9e8a4b9c?auto=format&fit=crop&w=900&q=60" },
  { id: 17, name: "Paneer Tikka", price: 229, img: "https://images.unsplash.com/photo-1604908177522-402c58a3b161?auto=format&fit=crop&w=900&q=60" },
  { id: 18, name: "Chicken Tikka", price: 299, img: "https://images.unsplash.com/photo-1628294896516-344152a0e0c4?auto=format&fit=crop&w=900&q=60" },
  { id: 19, name: "Veg Momos", price: 99, img: "https://images.unsplash.com/photo-1628294896158-0d4c4a3e2f63?auto=format&fit=crop&w=900&q=60" },
  { id: 20, name: "Chicken Momos", price: 129, img: "https://images.unsplash.com/photo-1628294896158-0d4c4a3e2f63?auto=format&fit=crop&w=900&q=60" },

  { id: 21, name: "Hakka Noodles", price: 149, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=60" },
  { id: 22, name: "Fried Rice", price: 149, img: "https://images.unsplash.com/photo-1604909052718-8c6f3b4f1f0a?auto=format&fit=crop&w=900&q=60" },
  { id: 23, name: "Chilli Paneer", price: 199, img: "https://images.unsplash.com/photo-1604908177522-402c58a3b161?auto=format&fit=crop&w=900&q=60" },
  { id: 24, name: "Manchurian", price: 179, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=60" },
  { id: 25, name: "Spring Roll", price: 119, img: "https://images.unsplash.com/photo-1604908554162-45fce27f4c92?auto=format&fit=crop&w=900&q=60" },

  { id: 26, name: "Samosa", price: 15, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=60" },
  { id: 27, name: "Pav Bhaji", price: 129, img: "https://images.unsplash.com/photo-1626078298476-2f1c9e8a4b9c?auto=format&fit=crop&w=900&q=60" },
  { id: 28, name: "Chole Bhature", price: 149, img: "https://images.unsplash.com/photo-1604908177522-402c58a3b161?auto=format&fit=crop&w=900&q=60" },
  { id: 29, name: "Idli Sambhar", price: 99, img: "https://images.unsplash.com/photo-1604909052718-8c6f3b4f1f0a?auto=format&fit=crop&w=900&q=60" },
  { id: 30, name: "Dosa", price: 129, img: "https://images.unsplash.com/photo-1604909052718-8c6f3b4f1f0a?auto=format&fit=crop&w=900&q=60" },

  { id: 31, name: "Veg Thali", price: 199, img: "https://images.unsplash.com/photo-1604908554162-45fce27f4c92?auto=format&fit=crop&w=900&q=60" },
  { id: 32, name: "Chicken Thali", price: 299, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=60" },
  { id: 33, name: "Gulab Jamun", price: 60, img: "https://images.unsplash.com/photo-1614088685730-3b0b1a7f5a99?auto=format&fit=crop&w=900&q=60" },
  { id: 34, name: "Ice Cream", price: 80, img: "https://images.unsplash.com/photo-1505253216365-0f6f2e0c2f33?auto=format&fit=crop&w=900&q=60" },
  { id: 35, name: "Brownie", price: 120, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=60" },

  { id: 36, name: "Mango Shake", price: 99, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=60" },
  { id: 37, name: "Oreo Shake", price: 129, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=60" },
  { id: 38, name: "Lassi", price: 60, img: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=900&q=60" },
  { id: 39, name: "Soft Drink", price: 40, img: "https://images.unsplash.com/photo-1622483856322-8f4dcd08b0a6?auto=format&fit=crop&w=900&q=60" },
  { id: 40, name: "Mineral Water", price: 20, img: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=900&q=60" },

  { id: 41, name: "Veg Sandwich", price: 99, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=60" },
  { id: 42, name: "Grilled Sandwich", price: 129, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=60" },
  { id: 43, name: "Pasta", price: 169, img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=900&q=60" },
  { id: 44, name: "White Sauce Pasta", price: 189, img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=900&q=60" },
  { id: 45, name: "Red Sauce Pasta", price: 179, img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=900&q=60" },

  { id: 46, name: "Veg Soup", price: 89, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=60" },
  { id: 47, name: "Tomato Soup", price: 89, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=60" },
  { id: 48, name: "Chicken Soup", price: 129, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=60" },
  { id: 49, name: "Paneer Roll", price: 129, img: "https://images.unsplash.com/photo-1604908177522-402c58a3b161?auto=format&fit=crop&w=900&q=60" },
  { id: 50, name: "Chicken Roll", price: 159, img: "https://images.unsplash.com/photo-1628294896516-344152a0e0c4?auto=format&fit=crop&w=900&q=60" },
];

// ---------------------
// Cart
// ---------------------
let cart = {}; // id -> qty

const menuGrid = document.getElementById("menuGrid");
const cartCount = document.getElementById("cartCount");
const btnNext = document.getElementById("btnNext");

function renderMenu(list) {
  menuGrid.innerHTML = "";

  list.forEach((item) => {
    const qty = cart[item.id] || 0;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x250?text=Food'"/>
      <div class="cardBody">
        <div class="name">${item.name}</div>
        <div class="price">₹${item.price}</div>

        <div class="actions">
          <button class="btn btnMinus" data-id="${item.id}">-</button>
          <div class="qty">${qty}</div>
          <button class="btn btnAdd" data-id="${item.id}">+</button>
        </div>
      </div>
    `;

    menuGrid.appendChild(div);
  });
}

function updateCartUI() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  cartCount.innerText = count;

  btnNext.disabled = count === 0;
  document.getElementById("goNext").disabled = count === 0;
}

function addItem(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderMenu(getFilteredMenu());
  updateCartUI();
}

function removeItem(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  renderMenu(getFilteredMenu());
  updateCartUI();
}

function getFilteredMenu() {
  const q = document.getElementById("search").value.trim().toLowerCase();
  if (!q) return MENU;
  return MENU.filter((m) => m.name.toLowerCase().includes(q));
}

// Click events for + -
menuGrid.addEventListener("click", (e) => {
  const btn = e.target;
  const id = Number(btn.dataset.id);
  if (!id) return;

  if (btn.classList.contains("btnAdd")) addItem(id);
  if (btn.classList.contains("btnMinus")) removeItem(id);
});

// Search
document.getElementById("search").addEventListener("input", () => {
  renderMenu(getFilteredMenu());
});

// ---------------------
// Cart Modal
// ---------------------
const cartModal = document.getElementById("cartModal");
const checkoutModal = document.getElementById("checkoutModal");

document.getElementById("btnCart").onclick = () => openCart();
document.getElementById("closeCart").onclick = () => closeCart();

function openCart() {
  renderCart();
  cartModal.classList.remove("hidden");
}
function closeCart() {
  cartModal.classList.add("hidden");
}

// ---------------------
// Checkout flow (Next)
// ---------------------
document.getElementById("btnNext").onclick = () => {
  openCart();
};

document.getElementById("goNext").onclick = () => {
  closeCart();
  openCheckout();
};

document.getElementById("closeCheckout").onclick = () => {
  checkoutModal.classList.add("hidden");
};

function openCheckout() {
  const { items, total } = buildOrder();

  document.getElementById("checkoutCount").innerText = items.length;
  document.getElementById("checkoutTotal").innerText = total;

  checkoutModal.classList.remove("hidden");
}

function buildOrder() {
  let items = [];
  let total = 0;

  for (const idStr in cart) {
    const id = Number(idStr);
    const qty = cart[id];
    const food = MENU.find((x) => x.id === id);
    if (!food) continue;

    items.push({
      id,
      name: food.name,
      price: food.price,
      qty,
    });

    total += food.price * qty;
  }

  return { items, total };
}

function renderCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "";

  const { items, total } = buildOrder();
  document.getElementById("cartTotal").innerText = total;

  if (items.length === 0) {
    cartItemsDiv.innerHTML = `<p style="color:#94a3b8;">Cart is empty</p>`;
    return;
  }

  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "cartRow";
    row.innerHTML = `
      <div>
        <b>${it.name}</b><br/>
        <small>₹${it.price} × ${it.qty}</small>
      </div>
      <div><b>₹${it.price * it.qty}</b></div>
    `;
    cartItemsDiv.appendChild(row);
  });
}

// ---------------------
// Place order -> backend
// ---------------------
document.getElementById("placeOrderBtn").onclick = async () => {
  const { items, total } = buildOrder();

  if (items.length === 0) return alert("Cart empty!");

  const res = await fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ table, items, total }),
  });

  const data = await res.json();

  if (data.success) {
    alert("✅ Order placed successfully!");
    cart = {};
    checkoutModal.classList.add("hidden");
    renderMenu(getFilteredMenu());
    updateCartUI();
  } else {
    alert("❌ Order failed!");
  }
};

// Init
renderMenu(MENU);
updateCartUI();
