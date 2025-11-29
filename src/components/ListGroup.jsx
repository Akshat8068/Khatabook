import { useContext } from "react"
import ListItem from "./ListItem"
import TransactionContext from "../context/TransactionContext"

const ListGroup = () => {
  const { transactions } = useContext(TransactionContext)

  return (
    <>
      <ul className="border border-gray-300 rounded-lg 
                     p-2 sm:p-3 md:p-4 
                     space-y-2 sm:space-y-2.5 
                     max-h-[65vh] overflow-y-auto 
                     scroll-smooth shadow-sm">
        {
          transactions.map(transaction => (
            <ListItem key={transaction.id} transaction={transaction} />
          ))
        }
      </ul>
    </>
  )
}

export default ListGroup
