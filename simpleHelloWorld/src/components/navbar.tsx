import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
export const NavBar = () => {
    const [btnText, setBtnText] = useState('Login');
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li>
                    <button className='login-btn' onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
                    }}>{btnText}</button>
                </li>
            </ul>
        </div>

    );
}