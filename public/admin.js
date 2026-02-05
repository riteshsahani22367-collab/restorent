const ordersBox = document.getElementById("ordersBox");
const refreshBtn = document.getElementById("refreshBtn");

async function loadOrders() {
  const res = await fetch("/api/orders");
  const orders = await res.json();

  if (!orders || orders.length === 0) {
    ordersBox.innerHTML = `<h3>No orders yet...</h3>`;
    return;
  }

  ordersBox.innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-head">
        <div>
          <h3>Table: ${o.table}</h3>
          <p>🕒 ${o.time}</p>
          <p><b>Order ID:</b> ${o.id}</p>
        </div>

        <div>
          <span class="status ${o.status === "Pending" ? "pending" : "done"}">
            ${o.status}
          </span>
          <h3>Total: ₹${o.total}</h3>
        </div>
      </div>

      <div class="items">
        ${o.items.map(i => `
          <div class="item-row">
            <div>${i.name} × ${i.qty}</div>
            <div>₹${i.price * i.qty}</div>
          </div>
        `).join("")}
      </div>

      <div class="action-row">
        <button class="confirm-btn" data-action="status" data-id="${o.id}" data-status="Confirmed">
          ✅ Confirm
        </button>

        <button class="done-btn" data-action="status" data-id="${o.id}" data-status="Done">
          🍽 Done
        </button>

        <button class="delete-btn" data-action="delete" data-id="${o.id}">
          🗑 Delete
        </button>
      </div>
    </div>
  `).join("");
}

/* ✅ Event Delegation Fix */
ordersBox.addEventListener("click", async (e) => {
  const btn = e.target.closest("button"); // ⭐ MOST IMPORTANT FIX
  if (!btn) return;

  const action = btn.dataset.action;

  // ✅ STATUS UPDATE
  if (action === "status") {
    const id = Number(btn.dataset.id);
    const status = btn.dataset.status;

    await fetch("/api/order-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    });

    loadOrders();
  }

  // ✅ DELETE
  if (action === "delete") {
    const id = Number(btn.dataset.id);

    const ok = confirm("Delete this order?");
    if (!ok) return;

    await fetch("/api/order-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    loadOrders();
  }
});

refreshBtn.addEventListener("click", loadOrders);

setInterval(loadOrders, 4000);
loadOrders();
