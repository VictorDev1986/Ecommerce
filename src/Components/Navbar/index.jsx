import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Nabvar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8'

    return (
        <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-lg font-light ">
            <ul className="flex items-center gap-4">
                <li className="font-bold text-2xl">
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/All"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Clothes"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Electronics"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Furnituris"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnituris
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Toys"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Others"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li className="text-black/60">
                    Victordev1986@gmail.com
                </li>
                <li>
                    <NavLink to="/MyOrder"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        MyOrder
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/MyOrders"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/MyAccount"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Signin"
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Signin
                    </NavLink>
                </li>
                <li>
                    🛒{context.count}
                </li>
            </ul>
        </nav>

    )
}

export default Nabvar