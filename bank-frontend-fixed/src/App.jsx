
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Transfer from "./pages/Transfer";
import DepositWithdraw from "./pages/DepositWithdraw";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Account</Link>
        <Link to="/transfer">Transfer</Link>
        <Link to="/transaction">Deposit/Withdraw</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transaction" element={<DepositWithdraw />} />
        </Routes>
      </div>
    </div>
  );
}
