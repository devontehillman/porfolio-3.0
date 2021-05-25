import './App.css'; 
import Navbar from './components/Navbar'
import About from './components/About'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
     <Navbar/>
     <About/>
    </div>
  );
}

export default App;
