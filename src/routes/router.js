import { Routes, Route } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";

export default function Router() {
  return (
    <Routes>
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  )
}