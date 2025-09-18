
import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE;

export default function DepositWithdraw() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("deposit");
  const [message, setMessage] = useState("");

  const handleTransaction = async () => {
    try {
      const res = await axios.post(`${API}/accounts/${id}/${action}`, null, {
        params: { amount },
      });
      setMessage(`${action} successful, new transaction ID ${res.data.id}`);
    } catch (err) {
      setMessage(`${action} failed: ` + err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Deposit / Withdraw</h1>
      <input
        type="number"
        placeholder="Account ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <select value={action} onChange={(e) => setAction(e.target.value)} className="border p-2 rounded block mb-2">
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <button onClick={handleTransaction} className="bg-orange-600 text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
