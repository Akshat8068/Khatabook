import ListItem from "./ListItem"

const ListGroup = ({transactions,removetransaction,edittransactionfun,modelOpen}) => {
  return (
    <>
        <ul className="p-3  border-gray-200 border space-y-2.5">
        {
          transactions.map(transaction => <ListItem key={transactions.id} transaction={transaction} removetransaction={removetransaction} edittransactionfun={edittransactionfun} modelOpen={modelOpen} />)
        }  
        </ul>
    </>
  )
}

export default ListGroup
