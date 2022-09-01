import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getAllInvoices, getInvoice } from "../data"

export default function Invoices() {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam);
  return (
    <>
      <section style={{ padding: "1rem 0" }}>
        <div>
          <label>
            Invoice
            <input
              type="text"
              placeholder="type invoice name"
              onChange={(e) => {
                let searchInput = e.target.value;
                setSearchParam({ invoice: searchInput })
              }}
              value={searchParam.get("invoice") || ""}
            />
          </label>
        </div>
        <h2>Invoices</h2>
        <ol>
          {
            getAllInvoices().filter(invoice => {
              let queryParam = searchParam.get("invoice");
              if (queryParam)
                return invoice.name.toLowerCase().includes(queryParam.toLowerCase());

              return true;
            }).map(invoice =>
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
