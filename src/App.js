import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Navbox from './Components/nav.js'
import About from './Components/about.js'


function App() {
  return (
    <div className="App">
      <Navbox />
      <About />

    </div>
  );
}

export default App;
