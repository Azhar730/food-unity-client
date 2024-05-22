import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const {user,logOut} = useAuth()
    const links = <div className="flex gap-x-2">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/availableFoods'}>Available Foods</NavLink></li>
        <li><NavLink to={'/addFood'}>Add Food</NavLink></li>
        <li><NavLink to={'/manageMyFoods'}>Manage My Foods</NavLink></li>
        <li><NavLink to={'/myFoodRequest'}>My Food Request</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>
    </div>
    return (
        <div className="navbar h-[100px] z-10 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="w-12" src="https://i.postimg.cc/6pMtfcKv/Unity-Foods-Logo.png" alt="" />
                    <a className="text-xl">FoodUnity</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-x-2">
                {
                    user?.photoURL && <img title={user?.displayName} className="cursor-pointer w-12 rounded-full" src={user?.photoURL}></img>
                }
                {user?
                    <button className="bg-[#d9c7b1] text-[#F79520] rounded py-2 px-4 font-semibold cursor-pointer text-lg" onClick={()=>logOut()}>Logout</button>
                    :
                    <Link to={'/login'} className="bg-[#d9c7b1] text-[#F79520] rounded py-2 px-4 font-semibold cursor-pointer text-lg">Login</Link> 
                }
            </div>
        </div>
    );
};

export default NavBar;
