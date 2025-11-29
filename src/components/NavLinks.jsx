import { MdOutlineDarkMode } from "react-icons/md"

const NavLinks = () => {
    return (
        <>
            <div className="h-full min-w-[200px] sm:min-w-[300px] flex items-center gap-3 sm:gap-6 text-sm sm:text-lg font-medium">
                <MdOutlineDarkMode className="text-lg sm:text-2xl" />
                <a href="#">Home</a>
                <a href="#">Reports</a>
                <a href="#">Login</a>
            </div>
        </>
    )
}
export default NavLinks
