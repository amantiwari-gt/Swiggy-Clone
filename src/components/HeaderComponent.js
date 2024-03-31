import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const [signup, setSignUp] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button 
                        className="sign-up" 
                        onClick={
                            (e) => {
                                setSignUp(signup === "Login"? "Logout" : "Login");
                            }
                    }>
                        {signup}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent;