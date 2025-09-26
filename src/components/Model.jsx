import React, { useEffect, useState } from 'react'

const Model = ({ isModelOpen, modelOpen, addtransaction,edittransaction,updatetransaction }) => {
  
  const [text, settext] = useState("")
  const[amount,setamount]=useState("")
  const handlesubmit = (e) => {
    e.preventDefault()
    if (!edittransaction.isedit) {
      addtransaction({
        id: crypto.randomUUID(),
        text: text,
        amount: parseInt(amount)
      })
    }
    else {
      updatetransaction({
        id: edittransaction.transaction.id,
        text,
        amount: parseInt(amount)
      })
    }
    setamount("")
    settext("")
    modelOpen()
  }
  useEffect(() => {
    settext(edittransaction.transaction.text)
    setamount(edittransaction.transaction.amount)
  },[edittransaction])
  return (
    <>
          <div className={isModelOpen ? "bg-white px-5 absolute border border-black rounded-md text-black top-32 left-56 h-[200px] min-w-[500px] z-20":"hidden"}>
        <form onSubmit={handlesubmit} className="flex flex-col space-y-1 p-2.5">
          <input value={text} onChange={(e) => settext(e.target.value)} className="w-full m-2   rounded-md p-2.5  border border-gray-300 outline-none  " type="text" placeholder="Enter  Transaction" />
          <input value={amount} onChange={(e) => setamount(e.target.value)} className="w-full  m-2 rounded-md border border-r-gray-300 p-2.5 outline-none" type="number" placeholder="Enter Amount" />
                <button className="bg-green-500 w-full text-lg rounded-md border border-white m-2 text-white text-lg font-semibold p-2 ">Save Transaction</button>
            </form>
            <button onClick={modelOpen} className="bg-red-500 w-full text-lg rounded-md boder border-white m-2 text-white text-lg font-semibold p-2 ">Cancel Transaction</button>
        </div>
        <button onClick={modelOpen} className="h-14 w-14 rounded-full bg-blue-600 bottom-5 right-2.5 fixed">
            <span className="text-2xl font-bold">+</span>
        </button>
    </>
  )
}

export default Model
