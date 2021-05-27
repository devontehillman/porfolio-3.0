import './App.css'; 
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div>
     <Navbar/>
     {/* <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/contact" exact component = {Contact}/>
      </Switch> */}
     {/* <About/> */}
     <Projects/>
    </div>
  );
}

export default App;
