import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getInvoice } from "../../data";

export default function Invoice() {
  const { invoiceId } = useParams();
  const invoice = getInvoice(Number(invoiceId));

  return (
    <section>
      <p>Invoice Number: {invoice.number}</p>
      <p>Invoice Name: {invoice.name}</p>
      <p>Invoice Amount: {invoice.amount}</p>
      <p>Invoice due: {invoice.due}</p>
    </section>
  )
}

