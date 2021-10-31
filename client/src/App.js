import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {useState,useEffect} from 'react'
import UserContext from './userContext'
import Header from './components/header'
import Home from './pages/home';
import Items from './pages/items'
import Item from './pages/item'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'
import ShoppingCart from './pages/shoppingCart'
import axios from 'axios'
function App() {

  
  const [logedIn,setLogedIn] = useState(false)

  const verifyToken= async ()=>{

    const storedToken = localStorage.getItem('token')
     
    axios.post('http://localhost:4000/user/verify',null, {headers: {"token": storedToken}}).
        
          then(
            res=> setLogedIn(res.data) )

          // console.log(res)
         
    }
    
  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <div className="App">
     
     <UserContext.Provider value={{logedIn,setLogedIn}}>
     <Router>
       <Header/>
       <Switch>
         <Route exact path ='/' component={Home}></Route>
         <Route exact path ='/items' component={Items}></Route>
         <Route exaxt path ='/items/:id' component={Item}></Route>
         <Route exact path = '/contact-us' component={Contact}></Route>
         <Route exact path = '/login' component = {Login}></Route>
         <Route exact path = '/register' component = {Register}></Route>
         <Route exact path = '/cart' component = {ShoppingCart}></Route>
        

       </Switch>
     </Router>
     </UserContext.Provider>
    </div>
  );
}

export default App;
