import { useContext } from "react"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import TransactionContext from "../context/TransactionContext"

const DashBoard = () => {
  const { transactions } = useContext(TransactionContext)
  let income = transactions.filter(t => t.amount > 0).reduce((a, c) => a + c.amount, 0)
  let expense = transactions.filter(t => t.amount < 0).reduce((a, c) => a + c.amount, 0)
  let balance = transactions.reduce((a, c) => a + c.amount, 0)
 
  return (
    <>
      <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 items-center justify-center md:justify-around w-full py-4">

        {/* Card */}
        <div className="w-[45%] sm:w-40 md:w-44 lg:w-48 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-evenly rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl bg-yellow-400 cursor-pointer shadow">
          <p>Total Income</p>
          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineCurrencyRupee className="text-lg sm:text-xl md:text-2xl" />
            <span>{income}</span>
          </div>
        </div>

        <div className="w-[45%] sm:w-40 md:w-44 lg:w-48 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-evenly rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl bg-cyan-500 cursor-pointer shadow">
          <p>Total Balance</p>
          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineCurrencyRupee className="text-lg sm:text-xl md:text-2xl" />
            <span>{balance}</span>
          </div>
        </div>

        <div className="w-[45%] sm:w-40 md:w-44 lg:w-48 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-evenly rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl bg-red-500 cursor-pointer shadow">
          <p>Total Expenses</p>
          <div className="flex items-center gap-1 sm:gap-2">
            <MdOutlineCurrencyRupee className="text-lg sm:text-xl md:text-2xl" />
            <span>{expense}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default DashBoard
