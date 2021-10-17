import '../styles/header.css'
import {Link} from 'react-router-dom'
import logo from '../media/Foody-logos_black.png'
const Header = () => {
    return (
        <div className="header">
            <div className="contact">
                <Link to="#">Contact us</Link>
            </div>
            <div className="logo">
                <Link to="/"> <img src={logo} alt="Logo"/> </Link>
            </div>
            <div className="login">
                <Link to="#">Login</Link>
            </div>
            <div className="register">
                <Link to="#">
                    <button>
                        Create an acount
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header
