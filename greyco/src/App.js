import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Inicio} from "./InicioPage/Inicio.js";
import {NavBar} from "./Estructura/Header/Header.js";


function App() {
   return (
      <div className="App">
        <Router>
          <Inicio />
          <Routes>
            <Route path= '/website' element={<NavBar/>}/>

          </Routes>
          
        </Router>
      </div>
    );
}

export default App;
