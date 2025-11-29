import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import TransactionContext from "../context/TransactionContext";

const ListItem = ({ transaction }) => {
  const { dispatch, modelOpen } = useContext(TransactionContext);

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-2 border-black rounded-3xl px-3 sm:px-5 py-2 text-sm sm:text-base md:text-lg">

        <p className="text-[10px] sm:text-xs font-light">
          id : {transaction.id}
        </p>

        <h3 className="text-sm sm:text-lg font-medium break-words">
          {transaction.text}
        </h3>

        <h2 className="text-sm sm:text-xl font-semibold">
          {transaction.amount}
        </h2>

        <div className="flex items-center gap-2 sm:gap-3">

          <button onClick={()=>dispatch({type:"EDIT",payload:transaction},modelOpen())} className="text-base sm:text-xl bg-blue-300 px-2 sm:px-3 py-1 sm:py-2 rounded-md">
            <FaRegEdit />
          </button>

          <button onClick={()=>dispatch({type:"REMOVE",payload:transaction.id})} className="text-base sm:text-xl bg-red-500 px-2 sm:px-3 py-1 sm:py-2 rounded-md">
            <MdDeleteOutline />
          </button>

        </div>
      </li>
    </>
  )
}

export default ListItem;
