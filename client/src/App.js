import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home';
import Items from './pages/items'
import Item from './pages/item'
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Switch>
         <Route exact path ='/' component={Home}></Route>
         <Route exact path ='/items' component={Items}></Route>
         <Route exaxt path ='/items/:id' component={Item}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
