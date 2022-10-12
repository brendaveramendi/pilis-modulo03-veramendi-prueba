import './App.css';
import { useEffect, useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import { getCards } from './services';
import Navigation from './routes/Navigation/Navigation'
import Home from './routes/Home/Home';
import Formulario from './routes/Formulario/Formulario';
import Inicio from './routes/Inicio/Inicio';
import {CardContext} from './context/CardContext';
//import AppLogo from './AppLogo.png'

function App() {
  const {setCardsColection } = useContext(CardContext)
  useEffect(() => {
    getCards()
    .then(data=>setCardsColection(data))
    .catch(err=> console.log(err))
  }, [])

    return (
    <>
     {/* <header className='header'>
      <nav className='nav-links-container'>
        <Link className='logo-container' to='/'>
          <img src={AppLogo} alt='Logo' className='logo'  />
        </Link>
        <div className='list-links'>
          <Link className='nav-link' to='/'>Inicio</Link>
          <Link className='nav-link' to='/home'>Home</Link>
          <Link className='nav-link' to='/formulario'>Formulario</Link>
        </div>
      </nav>
    </header>  */}
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >  
          <Route index element={<Home />} />  
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/formulario' element={<Formulario />} /> 
        </Route>
       </Routes>
    </div>   
    </>
   
  );
}

export default App;
