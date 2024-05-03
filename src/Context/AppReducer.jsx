export default (state,action) => {
    switch(action.type){
        case "ADD_TRANSACTIONS":
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case "DELETE_TRANSACTION":
            
            return{
               
                transactions:state.transactions.filter((transaction=> transaction.id !== action.payload))
            }

        default: 
            return state
    }
}