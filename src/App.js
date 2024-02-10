import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Nav';
import Mods from './components/Mods';
import Donate from './components/Donate';
import BlackMarket from './components/BlackMarket';
import Privacy from './components/Privacy';
import Tos from './components/Tos';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/mods' element={<Mods />}/>
        <Route path='/black-market' element={<BlackMarket />}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path='/privacy' element={<Privacy />}/>
        <Route path='/terms-of-service' element={<Tos />}/>
      </Routes>
    </div>
  );
}

export default App;
