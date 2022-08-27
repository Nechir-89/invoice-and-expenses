import { Link } from 'react-router-dom';
import Router from './routes/router';

function App() {

  return (
    <main>
      <Router />
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        &nbsp; | &nbsp;
        <Link to="/expenses">Expenses</Link>
      </nav>
    </main>
  );
}

export default App;
