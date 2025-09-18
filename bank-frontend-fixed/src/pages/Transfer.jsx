
import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE;

export default function Transfer() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const transfer = async () => {
    try {
      const res = await axios.post(`${API}/transfer`, null, {
        params: { fromId, toId, amount },
      });
      setMessage(res.data);
    } catch (err) {
      setMessage("Transfer failed: " + err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transfer Money</h1>
      <input
        type="number"
        placeholder="From Account ID"
        value={fromId}
        onChange={(e) => setFromId(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <input
        type="number"
        placeholder="To Account ID"
        value={toId}
        onChange={(e) => setToId(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <button onClick={transfer} className="bg-purple-600 text-white px-4 py-2 rounded">
        Transfer
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
