import Navbarsection from "./components/Navbarsection"
import ListGroup from "./components/ListGroup"
import Model from "./components/Model"
import { useState } from "react"
import DashBoard from "./components/DashBoard"

const App = () => {
  const [isModelOpen, setisModelOpen] = useState(false)
  const modelOpen = () => {
    setisModelOpen(isModelOpen ? false : true)
  }
  const [transactions, settransactions] = useState([
    { id: 1, text: "Salary",amount: 125000 },
    { id: 2, text: "Rent",amount: -20000 }
  ])

  const addtransaction = (transaction) => {
    settransactions([transaction, ...transactions])
    modelOpen()
  }

  const removetransaction = (id) => {
    settransactions(transactions.filter(transaction => transaction.id !== id))
  }

  const [edittransaction, setedittransaction] = useState({
    transaction: {},
    isedit:false
  })
  const edittransactionfun = (transaction) => {
    setedittransaction({
      transaction: transaction,
      isedit:true
    })
    modelOpen()
  }
  const updatetransaction = (updatedtransaction) => {
    settransactions(transactions.map(item => {
      if (item.id === updatedtransaction.id) {
        return updatedtransaction
      }
      else {
        return item
      }
    }
    ))
    setedittransaction({
      transaction: {},
      isedit: false
    })
  }
  return (
    <>
      <header>
        <Navbarsection/>
      </header>
      <main className="min-h-screen w-full m-2.5 relative">
        <div className={isModelOpen ? "h-[20vh] w-full mt-5 blur-sm" : "h-[20vh] w-full mt-5"}>
          <DashBoard transactions={transactions} />
          <ListGroup transactions={transactions} removetransaction={removetransaction} edittransactionfun={edittransactionfun} modelOpen={modelOpen} />
        </div>
        <Model isModelOpen={isModelOpen} modelOpen={modelOpen} addtransaction={addtransaction} edittransaction={edittransaction} updatetransaction={updatetransaction} />
      </main>
    </>
  )
}
export default App