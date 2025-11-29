import Navbarsection from "./components/Navbarsection"
import ListGroup from "./components/ListGroup"
import Model from "./components/Model"
import { useContext } from "react"
import DashBoard from "./components/DashBoard"
import TransactionContext from "./context/TransactionContext"

const App = () => {

  const{isModelOpen}=useContext(TransactionContext)
  return (
    <>
      <header>
        <Navbarsection/>
      </header>
      <main className="min-h-screen w-full px-3 sm:px-5 lg:px-8 pt-20 relative">
        <div className={`${isModelOpen ? "blur-sm pointer-events-none" : ""} w-full mt-5`}>

          <DashBoard  />
          <ListGroup  />
        </div>
        <Model />
      </main>
    </>
  )
}
export default App