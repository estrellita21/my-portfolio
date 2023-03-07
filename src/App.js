import './App.css';
import About from './Components/About';
import Achievement from './Components/Achievement';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Achievement/>
      <Contact/>
    </div>
  );
}

export default App;
