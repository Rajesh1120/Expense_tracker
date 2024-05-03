import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext"
import deleteImg from "../assests/bin.png"
function TransactionList(){

    const {transactions,deleteHandle} = useContext(GlobalContext)
    

    return (
        <div className="transactionlist">
            <div className="history">
                <h3>History</h3>
            
            {transactions.length > 0 ? transactions.map(transaction => 
            (<li key={transaction.id}>
                <button onClick={() => deleteHandle(transaction.id)}><img src={deleteImg} /></button>{transaction.text}
                <span id="amount">${transaction.amount}.00</span>
             </li>)
            ):"No Transactions"}
            </div>
        </div>
        
    )
}
export default TransactionList;