import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md";
const ListItem = ({transaction,removetransaction,edittransactionfun,modelOpen}) => {
  return (
    <>
        <li className="flex items-center justify-between m-2 boder border-black border-2 rounded-3xl px-5">
        <p className="text-xs font-extralight">id : {transaction.id} </p>
            <h3 className="text-lg font-medium"> {transaction.text} </h3>
            <h2 className="text-xl font-semibold"> {transaction.amount} </h2>
            
            <div className="flex items-center justify-around">
          <button onClick={() => { edittransactionfun(transaction), modelOpen() }} className="m-2.5 text-xl bg-blue-300 p-2 rounded-sm"><FaRegEdit /></button>
                <button onClick={()=>removetransaction(transaction.id)} className="m-2.5 text-xl bg-red-500 p-2 rounded-sm"><MdDeleteOutline /></button>
            </div>
        </li>
      
    </>
  )
}

export default ListItem
