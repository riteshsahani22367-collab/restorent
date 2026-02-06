const express = require("express");
const QRCode = require("qrcode");

const app = express();

// ✅ Deploy friendly PORT
const PORT = process.env.PORT || 3000;

// ✅ Admin password (apna rakh lo)
const ADMIN_PASSWORD = "admin@1";

// Middlewares
app.use(express.json());
app.use(express.static("public"));

// ✅ Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// ✅ QR Generate API (Deploy pe bhi perfect)
app.get("/generate-qr", async (req, res) => {
  const table = req.query.table;

  if (!table) return res.status(400).send("Table number required");

  const host = req.get("host");
  const protocol = req.headers["x-forwarded-proto"] || "http";

  const url = `${protocol}://${host}/menu.html?table=${table}`;

  try {
    const qr = await QRCode.toDataURL(url);
    res.json({ qr, url });
  } catch (err) {
    res.status(500).send("QR generation failed");
  }
});

// ✅ Admin login API
app.post("/api/admin-login", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }

  res.json({ success: false });
});

// ---------------------------
// ✅ Orders System (In-Memory)
// ---------------------------

let ORDERS = []; // { id, table, items, total, status, time }

// ✅ Place order
app.post("/api/order", (req, res) => {
  const { table, items, total } = req.body;

  if (!table || !items || items.length === 0) {
    return res.json({ success: false, message: "Invalid order" });
  }

  const order = {
    id: Date.now(),
    table,
    items,
    total,
    status: "Pending",
    time: new Date().toLocaleString(),
  };

  ORDERS.unshift(order);
  res.json({ success: true, order });
});

// ✅ Get orders
app.get("/api/orders", (req, res) => {
  res.json(ORDERS);
});

// ✅ Update order status
app.post("/api/order-status", (req, res) => {
  const { id, status } = req.body;

  const order = ORDERS.find((o) => o.id === id);
  if (!order) return res.json({ success: false });

  order.status = status;
  res.json({ success: true });
});

// ✅ Delete order
app.post("/api/order-delete", (req, res) => {
  const { id } = req.body;

  ORDERS = ORDERS.filter((o) => o.id !== id);
  res.json({ success: true });
});

// ✅ Server Start
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at port ${PORT}`);
});
