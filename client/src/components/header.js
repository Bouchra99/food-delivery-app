import '../styles/header.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import logo from '../media/Foody-logos_black.png'
import UserContext from '../userContext'
const Header = () => {

    const {logedIn,setLogedIn} = useContext(UserContext)
    
    const logout = () =>{
        setLogedIn(false)
        localStorage.clear()
        // window.location = "/"
    }

    return (
        <div className="header">
            <div className="contact">
                <Link to="/contact-us">Contact us</Link>
            </div>
            <div className="logo">
                <Link to="/"> <img src={logo} alt="Logo"/> </Link>
            </div>
            { logedIn ? 
                // user loged in 
                <>
                    <div className="login">
                        <Link to="/cart">Shoping Cart</Link>
                   </div>
                    <div className="register">
                        <Link to="/login">
                            <button onClick={()=>logout()}>
                                Logout
                            </button>
                        </Link>
                    </div>
                
                </> : 
                //user not loged in : 
                <>
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
                </>}
         
        </div>
    )
}

export default Header
