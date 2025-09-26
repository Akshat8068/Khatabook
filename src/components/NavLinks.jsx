import { MdOutlineDarkMode } from "react-icons/md"
const NavLinks = () => {
    return (
        <>
            <div className="h-full min-w-[300px] flex items-center justify-around ">
                <MdOutlineDarkMode />
                <a className="text-lg font-medium" href="#">Home</a>
                <a className="text-lg font-medium" href="#">Reports</a>
                <a className="text-lg font-medium" href="#">Login</a>
            </div>
        </>
    )
}
export default NavLinks