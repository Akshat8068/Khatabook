export const transactionReducer = (state, action) => { 
    switch (action.type) {
        case "REMOVE":
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        case "ADD":
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case "EDIT":
            return {
                ...state,
                edit: {
                    transaction: action.payload,
                    isedit:true
                }
            }
        case "UPDATE":
            return {
                ...state,
                transactions: state.transactions.map(item => item.id === action.payload.id ? action.payload : item),
                edit:{transaction:{},isedit:false}
            }
        
        default:
            return (state)
    }
}