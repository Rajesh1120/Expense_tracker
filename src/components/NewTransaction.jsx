import {useState,useContext} from "react";
import { GlobalContext } from "../Context/GlobalContext";
function NewTransaction(){
    const [formData,setFormData] = useState({})
    const {addTransaction} = useContext(GlobalContext)

    function handleChange(name,value){
        setFormData({
            ...formData,
            id:Math.floor(Math.random()* 100000),
            [name]: name === 'amount' ?+value:value
        })
    }
   
    return(
        <div className="new_transaction">
            <h3>Add Transcation</h3>
            <div className="form">
                <label>Text:</label>
                <input type="text" name="text" onChange={(e) => handleChange(e.target.name,e.target.value)} placeholder="Enter your transanction " required/>
                <label>Amount</label>
                <input type="number" name="amount" placeholder="Enter Amount" onChange={(e) => handleChange(e.target.name,e.target.value)} required />

                <button onClick={()=>addTransaction(formData)}>Add Transactions</button>
            </div>
        </div>
    )
}
export default NewTransaction;