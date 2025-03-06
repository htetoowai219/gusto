import { NavLink } from "react-router"

function Header() {
    return (
        <nav className="flex items-center justify-between border-b border-b-gray-300 my-10 pb-5">
            <h1 className="text-4xl font-bold">Gusto</h1>
            <div className="flex items-center gap-2 text-lg font-medium text-gray-500">
                <NavLink 
                    to={"/"} 
                    className={({ isActive }) => isActive ? "text-black" : undefined}>
                        Recipes
                </NavLink>
                <NavLink 
                    to={"/about"} 
                    className={({ isActive }) => isActive ? "text-black" : undefined}>
                        About
                </NavLink>
            </div>
        </nav>
    )
}

export default Header