import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <main>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        &nbsp; | &nbsp;
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
