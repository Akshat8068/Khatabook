
import { MdOutlineCurrencyRupee } from "react-icons/md"
const DashBoard = ({ transactions }) => {
  let income = transactions.filter(transaction => transaction.amount > 0).reduce((a, c) => a + c.amount, 0)
  let expense = transactions.filter(transaction => transaction.amount < 0).reduce((a, c) => a + c.amount, 0)
  let balance = transactions.reduce((a, c) => a + c.amount, 0)
  console.log("Transactions",transactions)
  return (
    <>
        <div className="flex items-center justify-around h-11/12 w-full ">
            <div className="h-11/12 w-3xs flex flex-col items-center justify-evenly rounded-2xl text-2xl bg-yellow-400 cursor-pointer">
                <p>Total Income</p>
                <div className="flex items-center justify-evenly">
                    <span><MdOutlineCurrencyRupee/></span>
                      <span>{income}</span>
                </div>
            </div> 
            <div className="h-11/12 w-3xs flex flex-col items-center justify-evenly rounded-2xl text-2xl bg-cyan-500 cursor-pointer">
              <p>Total Balance</p>
              <div className="flex items-center justify-evenly">
                <span><MdOutlineCurrencyRupee /></span>
                <span>{balance}</span>
              </div>
            </div> 
            <div className="h-11/12 w-3xs flex flex-col items-center justify-evenly rounded-2xl text-2xl bg-red-500 cursor-pointer">
              <p> Total Expenses</p>
              <div className="flex items-center justify-evenly">
                <span><MdOutlineCurrencyRupee /></span>
                <span>{expense}</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default DashBoard
