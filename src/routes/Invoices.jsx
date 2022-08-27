import { Link } from "react-router-dom";
import { getAllInvoices, getInvoice } from "../data"

export default function Invoices() {

  return (
    <section style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <ol>
        {
          getAllInvoices().map(invoice =>
            <li key={invoice.number}>
              <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
            </li>
          )
        }
      </ol>
      
    </section>
  );
}
