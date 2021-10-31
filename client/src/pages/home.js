import logo from '../media/Foody-logos_transparent.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
const Home = () => {

   

    return (
        <div className="home">
           <div className="logo-home">
               <img src={logo} alt = "logo" />
           </div>
           <div className="about">
               <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Provident doloremque sapiente nulla voluptatem veniam odit magni saepe, 
                    laborum quidem omnis, sunt ex distinctio, fugit corrupti voluptas cumque quos 
                    totam necessitatibus libero? Neque nisi quidem officia. Quo possimus quasi ullam 
                    recusandae commodi, corrupti animi quos dolorem dolorum. Facilis aperiam nulla quasi!

               </p>
               <Link to="/items"><button>Order Now</button></Link>
           </div>
        </div>
    )
}

export default Home
