import './App.css';
import {Switch,Route} from 'react-router-dom';
import Nav from './components/Header/Nav';
import Home from './components/Main/Home';
import Landing from './components/Landing/Landing';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Details from './components/Main/Details';
import Activities from './components/Main/Activities';

function App() {
  return (
    <>
   
        <Switch>
          <Route exact path='/' component={Landing}/>
          <>
            <div className="content">
              <Route path='/home' component={Nav}/>
              <Route path='/details' component={Nav}/>
              <Route path='/activities' component={Nav}/>
              <Route exact path='/home' component={Home}/> 
              <Route path='/details' component={Details}/> 
              <Route exact path='/activities' component={Activities}/> 
              <Route path='/home' component={Aside}/>
              <Route path='/activities' component={Aside}/>
              <Route path='/details' component={Aside}/>
              <Route path='/home' component={Footer}/>
              <Route path='/details' component={Footer}/>
              <Route path='/activities' component={Footer}/>
            </div>
          </>
        </Switch>
        
    </>
  );
}

export default App;
