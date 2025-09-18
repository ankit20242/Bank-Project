
import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE;

export default function CreateAccount() {
  const [owner, setOwner] = useState("");
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState("");

  const createAccount = async () => {
    try {
      const res = await axios.post(`${API}/accounts`, null, {
        params: { owner, balance },
      });
      setMessage(`Account created with ID ${res.data.id}`);
    } catch (err) {
      setMessage("Failed to create account: " + err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <input
        type="number"
        placeholder="Initial Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        className="border p-2 rounded block mb-2"
      />
      <button onClick={createAccount} className="bg-green-600 text-white px-4 py-2 rounded">
        Create
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
