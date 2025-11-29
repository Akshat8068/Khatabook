import { Children, createContext, useReducer, useState } from "react";
import { transactionReducer } from "./TransactionReducer";


const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
    const [isModelOpen, setisModelOpen] = useState(false)
      const modelOpen = () => {
        setisModelOpen(isModelOpen ? false : true)
    }   
  const initialState = {
    transactions: [{id:1,text:"Rent",amount:12000}],
    edit: {
      transaction: {},
      isedit:false
    }
  }
  
  const[state,dispatch] = useReducer(transactionReducer, initialState)

    return (
        <TransactionContext.Provider value={{...state, dispatch,  modelOpen, isModelOpen,  }}>
            {children}
        </TransactionContext.Provider>
    )
}
export default TransactionContext