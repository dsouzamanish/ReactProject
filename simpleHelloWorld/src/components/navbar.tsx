import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {useOnline} from "../hooks/useOnline.ts";
import {useSelector} from "react-redux";

export const NavBar = () => {
    const [btnText, setBtnText] = useState('Login');
    const isOnline = useOnline();

    const items = useSelector((store) => store.cart.items);
    return (
        <div className="flex">
            <ul className="flex  justify-between p-20px m-20px">
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300">Online status : {isOnline ? "✅" : "🔴"}</li>
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300"><Link key="2" to="/">Home</Link></li>
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300"><Link  key="3"to="/about">About Us</Link></li>
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300"><Link  key="4" to="/contact">Contact Us</Link></li>
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300">
                    <Link key="5" to="/cart"> <span className="mr-2">Cart</span>
                        <span className="bg-violet-900 text-white rounded-full px-2">{items.length}</span></Link></li>
                <li className="p-7 hover:bg-violet-300 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300 ">
                    <button key="6" className='login-btn' onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
                    }}>{btnText}</button>
                </li>
            </ul>
        </div>

    );
}