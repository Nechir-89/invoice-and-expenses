import { Routes, Route } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import App from "../App";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  )
}