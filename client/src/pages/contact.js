import '../styles/contact.css'
import {useContext} from 'react'
import UserContext from '../userContext'

const Contact = () => {
    const {logedIn,setLogedIn} = useContext(UserContext)
    return (
        <div className="info">
           infos {logedIn ? "True" : "False"}
        </div>
    )
}

export default Contact
