import { Routes, Route } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Invoice from "../components/invoice";

import App from "../App";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="/expenses" element={<Expenses />} />
        {/* how about shared layout with header and footer */}
      </Route>
    </Routes>
  )
}