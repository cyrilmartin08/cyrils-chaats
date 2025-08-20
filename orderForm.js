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
