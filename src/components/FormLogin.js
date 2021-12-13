import './FormLogin.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginGoogle from './LoginGoogle';

const FormLogin = ({nuevo, setNuevo}) =>{

    let history = useNavigate();

    const [usuario, setUsuario] = useState('');

    const [contraseña,setContraseña] = useState('');

    const irPrincipal = (e) => {
        e.preventDefault();
        history('/principal');
    }

    return(
        <React.Fragment>
        <div className='form-login'>
            <h3>Introduce tu nombre de usuario</h3>
            <input placeholder='Usuario' value={usuario} onChange={e=>setUsuario(e.target.value)} />
            <h3>Introduce tu contraseña</h3>
            <input placeholder='contraseña' type='password' 
            value={contraseña} onChange={e=>setContraseña(e.target.value)} /><br/>
            <button onClick={irPrincipal} >Ingresar</button><br/>
            <button onClick={()=>setNuevo(!nuevo)}>Nuevo usuario</button> <br/><br/>
            <LoginGoogle />
            <br/>
        </div>
        </React.Fragment>
    );
}

export default FormLogin;