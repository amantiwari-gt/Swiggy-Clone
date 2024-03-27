import {LOGO_URL} from "../utils/constants";

const Footer = () => {
    return (
        <div class="header">
            <div className ="logo-container">
                <img className ="logo" src= {LOGO_URL} alt="logo" />
            </div>
            <div className ="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Legal</li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;