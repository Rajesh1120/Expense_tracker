import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
function Balance(){

    const {transactions} = useContext(GlobalContext)
    let totalBalance= 5000
    const amounts = (transactions.length > 0 ? transactions.map(transaction => transaction.amount) : 0)

    const postivie_amounts=amounts === 0 ? 0 : amounts.filter(pos_amount => pos_amount > 0)
        const income = (postivie_amounts.length > 0 ? amounts.filter(pos_amount => pos_amount > 0)
        .reduce((acc,num) =>acc += num):0).toFixed(2)

    const negative_amounts=amounts === 0 ? 0 : amounts.filter(neg_amounts => neg_amounts < 0) 

        const expense= (negative_amounts.length > 0 ? amounts.filter(neg_amounts => neg_amounts < 0)
        .reduce((acc,num)=> acc += num):0 ).toFixed(2)
        console.log(expense)
        totalBalance=(totalBalance  +  parseInt(income) + parseInt(expense)).toFixed(2)
    return (
        <>
        <div className="balance">
            <h3>YOUR BALANCE</h3>
            <p>Total Balance: ${totalBalance}</p> 
            <p>Minimum Balance : $5000</p>
        </div>
        </>
    )
}
export default Balance;