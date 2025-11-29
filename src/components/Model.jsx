import React, { useContext, useEffect, useState } from 'react'
import TransactionContext from '../context/TransactionContext'

const Model = () => {
  const { isModelOpen, modelOpen, dispatch, edit} = useContext(TransactionContext)

  const [text, settext] = useState("")
  const [amount, setamount] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    !edit.isedit ?
      dispatch({
        type: "ADD",
        payload:{id:crypto.randomUUID(),text,amount:parseInt(amount)}
      }) :
      dispatch({
        type: "UPDATE",
        payload: {
          id: edit.transaction.id,
          text,
          amount: parseInt(amount)
        }
      })
      
    setamount("")
    settext("")
    modelOpen()
  }

  useEffect(() => {
    settext(edit.transaction.text)
    setamount(edit.transaction.amount)
    }, [edit])

  return (
    <>
      <div className={isModelOpen ?
        "bg-white px-4 py-3 fixed top-[20%] left-1/2 -translate-x-1/2 rounded-lg shadow-xl text-black w-[90%] sm:w-[450px] md:w-[500px] border border-gray-300 z-20"
        : "hidden"
      }>
        <form onSubmit={handlesubmit} className="flex flex-col gap-2">
          <input
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="w-full rounded-md p-2 border border-gray-300 outline-none text-sm sm:text-base"
            type="text"
            placeholder="Enter Transaction"
          />

          <input
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            className="w-full rounded-md p-2 border border-gray-300 outline-none text-sm sm:text-base"
            type="number"
            placeholder="Enter Amount"
          />

          <button className="bg-green-500 w-full text-white rounded-md font-semibold p-2 text-sm sm:text-lg">
            Save Transaction
          </button>
        </form>

        <button
          onClick={modelOpen}
          className="bg-red-500 w-full text-white rounded-md font-semibold p-2 mt-2 text-sm sm:text-lg"
        >
          Cancel Transaction
        </button>
      </div>

      {/* Floating Button */}
      <button
        onClick={modelOpen}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-600 bottom-5 right-4 fixed flex items-center justify-center shadow-md"
      >
        <span className="text-2xl sm:text-3xl font-bold text-white">+</span>
      </button>
    </>
  )
}

export default Model
