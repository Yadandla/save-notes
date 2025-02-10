import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="py-5 flex justify-center gap-7 bg-gray-800">
            <NavLink className={({ isActive }) => isActive ? "text-teal-300 underline underline-offset-8 text-xl" : "text-white text-xl"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-teal-300 underline underline-offset-8 text-xl" : "text-white text-xl"} to="/notes">Notes</NavLink>
        </div>
    )
}

export default Navbar
