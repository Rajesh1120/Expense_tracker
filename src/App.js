import Balance from "./components/Balance";
import Header from "./components/Header"
import IncomeExpense from "./components/IncomeExpense";
import NewTransaction from "./components/NewTransaction";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./Context/GlobalContext";
function App() {
  return (
    <>
    <GlobalProvider>
      <div className="app">
              <Header />
              <Balance />
              <IncomeExpense />
              <TransactionList />
              <NewTransaction />
      </div>
      </GlobalProvider>
      
    
    </>
  );
}

export default App;
