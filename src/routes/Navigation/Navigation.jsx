import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import logo from '../../assets/AppLogo.png';
import './Navigation.css';

const Navigation = () => {
   const { currentUser, setCurrentUser } = useContext(UserContext);

     useEffect(() => {
         const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

   const handleSignOut = () => {
    setCurrentUser(null);
   };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
         {currentUser ? (
            <Link className='nav-link' to='/'>
              Home
            </Link>
          ) : (
            <span className='nav-link'>Home</span>
          )}
          {currentUser ? (
            <Link className='nav-link' to='/formulario'>
              Nueva Tarjeta
            </Link>
          ) : (
            <span className='nav-link'>Nueva Tarjeta</span>
          )}

          {currentUser ? (
            <Link className='nav-link' to='/inicio' onClick={handleSignOut}>
              Cerrar Sesión
            </Link>
          ) : (
            <Link className='nav-link' to='/inicio'>
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};


export default Navigation;