 import React from 'react';
 import { useContext } from 'react';
 import { useForm } from 'react-hook-form';
 import { useNavigate } from 'react-router-dom';
 import { UserContext } from '../../context/UserContext';


 function Inicio() {
   const { setCurrentUser } = useContext(UserContext)
   const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate()
 
   const onSubmit = (data) => {
     localStorage.setItem('currentUser', JSON.stringify(data))
     setCurrentUser(data)
     navigate('/')
   }
   return (
     <div >
     <span>Ingresa con tu usuario y contraseña</span>
     <form onSubmit={handleSubmit(onSubmit)}>
       <input
         type="text"
         placeholder='Nombre de usuario'
         {...register('username', {
             required : 'Debe ingresar su nombre de usuario'
           }
         )
       } />
       <p>{errors.username?.message}</p>
       <input
         type='password'
         placeholder='Contraseña'
         {...register(
             'password',
             {
               required : 'Debe ingresar su contraseña'
             }
           )
         }
      />
       <p>{errors.password?.message}</p>
        <button type='submit'>Iniciar Sesión</button>
     </form>
   </div>
   )
 }


 export default Inicio