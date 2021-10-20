import '../styles/header.css'
import {Link} from 'react-router-dom'
import logo from '../media/Foody-logos_black.png'
const Header = () => {
    return (
        <div className="header">
            <div className="contact">
                <Link to="/contact-us">Contact us</Link>
            </div>
            <div className="logo">
                <Link to="/"> <img src={logo} alt="Logo"/> </Link>
            </div>
            <div className="login">
                <Link to="/login">Login</Link>
            </div>
            <div className="register">
                <Link to="/register">
                    <button>
                        Create an acount
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header
