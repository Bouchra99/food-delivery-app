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
import Profile from './pages/client/profile'
import axios from 'axios'
function App() {

  const [userData, setUserdata] = useState({
    token: undefined,
    user: undefined,
  })


  return (
    <div className="App">
     <UserContext.Provider value={{ userData , setUserdata }}>
     <Router>
       <Header/>
       <Switch>
         <Route exact path ='/' component={Home}></Route>
         <Route exact path ='/items' component={Items}></Route>
         <Route exaxt path ='/items/:id' component={Item}></Route>
         <Route exact path = '/contact-us' component={Contact}></Route>
         <Route exact path = '/login' component = {Login}></Route>
         <Route exact path = '/register' component = {Register}></Route>
        

       </Switch>
     </Router>
     </UserContext.Provider>
    </div>
  );
}

export default App;
