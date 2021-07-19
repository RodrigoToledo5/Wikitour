import './App.css';
import {Switch,Route} from 'react-router-dom';
import Nav from './components/Header/Nav';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
        <Switch>
        <Route exact path='/' component={Landing}/>
          <>
            <div className="content">
              <Route path='/main' component={Nav}/>
              <Route exact path='/main' component={Main}/> 
              <Route path='/main' component={Aside}/>
              <Route path='/main' component={Footer}/>
            </div>
          </>
        </Switch>
      
    </>
  );
}

export default App;
