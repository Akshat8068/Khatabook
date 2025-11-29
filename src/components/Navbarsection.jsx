import { FaBook } from "react-icons/fa"

import NavLinks from "./NavLinks"
const Navbarsection = () => {
    return (
        <>
            <nav className="w-full h-[10vh] border-b-2 border-black flex justify-between items-center px-3 sm:px-6 lg:px-10">

                <div className="h-full w-32 sm:w-40 flex items-center justify-evenly gap-1 sm:gap-2">
                    <FaBook className="h-[8vh] sm:h-[9vh] lg:h-[10vh] w-auto" />
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        Khata<span className="text-red-600">Book</span>
                    </h2>
                </div>

                <NavLinks />
            </nav>


        </>
    )
}
export default Navbarsection