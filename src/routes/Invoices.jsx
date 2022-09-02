import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllInvoices, getInvoice } from "../data"

export default function Invoices() {
  const [searchParam, setSearchParam] = useSearchParams();
  let location = useLocation();
  return (
    <>
      <section style={{ padding: "1rem 0" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>
            Invoice:
            <input
              type="text"
              placeholder="type invoice name"
              onChange={(e) => {
                let searchInput = e.target.value;
                let query = {}
                if (searchInput)
                  query.invoice = searchInput
                if (searchParam.get("invoiceId"))
                  query.invoiceId = searchParam.get("invoiceId");

                setSearchParam(query);
              }}
              value={searchParam.get("invoice") || ""}
            />
          </label>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>
            Invoice ID:
            <input
              type="text"
              placeholder="type invoice ID"
              value={searchParam.get("invoiceId") || ""}
              onChange={(e) => {
                let searchInput = e.target.value;
                let query = {};
                if (searchInput)
                  query.invoiceId = searchInput
                if (searchParam.get("invoice"))
                  query.invoice = searchParam.get("invoice");
                setSearchParam(query)
                // searchParam.append("invoiceId", searchInput);
                // console.log(searchParam.getAll());
              }}
            />
          </label>
        </div>
        <h2>Invoices</h2>
        <ol>
          {
            getAllInvoices().filter(invoice => {
              let queryParamInvoice = searchParam.get("invoice");
              let queryParamInvoiceId = searchParam.get("invoiceId");

              return queryParamInvoice && queryParamInvoiceId ?
                invoice.name.toLowerCase().includes(queryParamInvoice.toLowerCase()) && String(invoice.number).includes(queryParamInvoiceId)
                : queryParamInvoice ?
                  invoice.name.toLowerCase().includes(queryParamInvoice.toLowerCase())
                  : queryParamInvoiceId ? String(invoice.number).includes(queryParamInvoiceId)
                    : true
            }).map(invoice =>
              <li key={invoice.number}>
                <NavLink
                  to={`/invoices/${invoice.number}` + location.search}
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
