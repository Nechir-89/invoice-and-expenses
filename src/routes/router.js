import { Routes, Route } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Invoice from "../components/invoice";
import NotFound from "./NotFound";

import App from "../App";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="/expenses" element={<Expenses />} />
        {/* how about shared layout with header and footer */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}