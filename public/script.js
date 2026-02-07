const tableInput = document.getElementById("tableInput");
const genBtn = document.getElementById("genBtn");
const qrImg = document.getElementById("qrImg");
const urlText = document.getElementById("urlText");

genBtn.addEventListener("click", async () => {
  const table = tableInput.value.trim();
  if (!table) return alert("Table number dalo!");

  const res = await fetch(`/generate-qr?table=${table}`);
  const data = await res.json();

  qrImg.src = data.qr;
  urlText.innerHTML = `QR URL: <b>${data.url}</b>`;
  
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
