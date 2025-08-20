export default function OrderForm() {
  async function saveTransaction(transactionData) {
    try {
      const response = await fetch("https://cyrils-chaats.vercel.app/api/save-transactions", { // ✅ match your API route name
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
      });

      const data = await response.json();
      console.log("Server response:", data);
      alert("Transaction saved!");
    } catch (err) {
      console.error("Error saving transaction:", err);
      alert("Failed to save transaction.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example data (replace with real form input values later)
    const transactionData = {
      customerName: "Cyril",
      item: "Pani Puri",
      price: 50,
      paymentMethod: "Cash",
      date: new Date().toISOString(),
    };

    saveTransaction(transactionData); // ✅ only call here
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Place Order</button>
    </form>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect live user input
    const transactionData = {
      customerName: document.getElementById("customerName").value,
      item: document.getElementById("item").value,
      price: parseFloat(document.getElementById("price").value),
      paymentMethod: document.getElementById("paymentMethod").value,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://cyrils-chaats.vercel.app/api/save-transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
      });

      const data = await response.json();
      console.log("Server response:", data);
      alert("✅ Transaction saved!");
      form.reset(); // clear form after submit
    } catch (err) {
      console.error("❌ Error saving transaction:", err);
      alert("Failed to save transaction.");
    }
  });
});
