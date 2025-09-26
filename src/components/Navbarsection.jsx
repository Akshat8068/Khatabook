import { FaBook } from "react-icons/fa"

import NavLinks from "./NavLinks"
const Navbarsection = () => {
    return (
        <>
            <nav className="h-[10vh] w-full boder border-b-2 border-black flex justify-between items-center">
                <div className="h-full w-40 flex items-center justify-evenly">
                    <FaBook className="h-[10vh]" />
                    <h2 className="text-2xl font-bold">Khata<span className="text-red-600">Book</span></h2>
                </div>
                <NavLinks/>
            </nav>
        </>
    )
}
export default Navbarsection