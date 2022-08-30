import { NavLink, Outlet } from "react-router-dom";
import { getAllInvoices, getInvoice } from "../data"

export default function Invoices() {

  return (
    <>
      <section style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        <ol>
          {
            getAllInvoices().map(invoice =>
              <li key={invoice.number}>
                <NavLink
                  to={`/invoices/${invoice.number}`}
                  style={({ isActive }) => ({ color: isActive ? "red" : "", fontWeight: isActive ? "bold" : "normal" })}
                >
                  {invoice.name}
                </NavLink>
              </li>
            )
          }
        </ol>

      </section>
      <Outlet />
    </>
  );
}
