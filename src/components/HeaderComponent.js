import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {

    const [signup, setSignUp] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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