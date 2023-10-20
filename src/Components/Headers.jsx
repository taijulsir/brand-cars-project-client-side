import { Link, NavLink } from "react-router-dom";
import logo from "../../public/new-cars-logo.png"
import AuthHook from "../CustomHook/AuthHook";
import toast from "react-hot-toast";

const Headers = () => {
    const { user, signOutUser } = AuthHook()
    const handleSignOUt = () => {
        signOutUser()
        .then(()=> {
            toast.success('Sign Out Succesfull')
        })
        .catch((error)=> {
            toast.error(error)
        })
    }
    const navlinks =
        <>
            {/* Home, Add Product, My Cart, and Login. */}
            <li className="mr-4 text-lg  font-medium"><NavLink to="/">Home</NavLink></li>
            <li className="mr-4 text-lg font-medium"><NavLink to="/addProduct">Add Product</NavLink></li>
            <li className="mr-4 text-lg font-medium"><NavLink to="/myCart">My Cart</NavLink></li>
            <li className="mr-4 text-lg font-medium"><NavLink to="/login">Login</NavLink></li>
        </>
    return (
        <div className="navbar  bg-sky-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className=" normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                       
                        <li className="text-xl font-medium px-1">{user.displayName}</li>
                        <li><button className="text-xl" onClick={handleSignOUt}>Logout</button></li>
                    </ul>
                </div> : <Link to="/login"><button className="btn bg-amber-400 font-bold"> Login</button></Link>}
            </div>
        </div>
    );
};

export default Headers;