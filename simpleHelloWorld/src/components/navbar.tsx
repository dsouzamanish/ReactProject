import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {useOnline} from "../hooks/useOnline.ts";
export const NavBar = () => {
    const [btnText, setBtnText] = useState('Login');
    const isOnline = useOnline();

    console.log("Online status",isOnline)
    return (
        <div className="navbar">
            <ul>
                <li>Online status : {isOnline ? "✅" : "🔴"}</li>
                <li ><Link key="2" to="/">Home</Link></li>
                <li><Link  key="3"to="/about">About Us</Link></li>
                <li><Link  key="4" to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li >
                    <button key="6" className='login-btn' onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
                    }}>{btnText}</button>
                </li>
            </ul>
        </div>

    );
}