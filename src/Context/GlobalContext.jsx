import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
export const intialState={
    transactions:[
        { id:1, text:"Flower", amount: -20 },
        { id:2, text:"Salary", amount: 300},
        { id:3, text:"Book", amount: -10},
        { id:4, text:"Camera", amount: 400}
    ]
}


export const GlobalContext = createContext(intialState);


export const GlobalProvider = ({children}) => {
    const [ state , dispatch]=useReducer(AppReducer,intialState)
    
    function addTransaction(transaction){
        console.log(transaction)
        dispatch({
            type:"ADD_TRANSACTIONS",
            payload:transaction
        });
    }

    function deleteHandle(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }


    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction,
        deleteHandle
        }}>
        {children}
    </GlobalContext.Provider>)
}