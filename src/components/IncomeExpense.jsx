import { useContext} from 'react'
import { GlobalContext } from '../Context/GlobalContext';

function IncomeExpense(){
    const {transactions}=useContext(GlobalContext)

    const amounts = (transactions.length > 0 ? transactions.map(transaction => transaction.amount) : 0)
        
    const postivie_amounts=amounts === 0 ? 0 : amounts.filter(pos_amount => pos_amount > 0)

    const income = (postivie_amounts.length > 0 ? amounts.filter(pos_amount => pos_amount > 0)
    .reduce((acc,num) =>acc += num):0).toFixed(2)

    const negative_amounts= amounts === 0 ? 0 :amounts.filter(neg_amounts => neg_amounts < 0) 

    const expense= (negative_amounts.length > 0 ? amounts.filter(neg_amounts => neg_amounts < 0)
    .reduce((acc,num)=> acc += num):0 ).toFixed(2)
     
    
    return(
        <>
            <div className="income_expense">
                <h3>Income Expense</h3>
                <div className="income">
                    <div id="income">INCOME:
                        <p>${income}</p>
                    </div>
                    <div id="expense">EXPENSE:
                        <p>${expense}</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default IncomeExpense;