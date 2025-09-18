
import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE;

export default function Dashboard() {
  const [id, setId] = useState("");
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");

  const fetchAccount = async () => {
    try {
      const res = await axios.get(`${API}/accounts/${id}`);
      setAccount(res.data);
      setError("");
    } catch (err) {
      setError("Account not found");
      setAccount(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Account ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchAccount} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {account && (
        <div className="bg-white p-4 rounded shadow">
          <p><b>ID:</b> {account.id}</p>
          <p><b>Owner:</b> {account.owner}</p>
          <p><b>Balance:</b> {account.balance}</p>
        </div>
      )}
    </div>
  );
}
