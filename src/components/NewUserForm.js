import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormLogin.css';
import nextId from 'react-id-generator';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const NewUserForm = ({nuevo, setNuevo}) => {


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdE9h0EK0YdwxFuULZL6m8gyfAFFqSB6A",
    authDomain: "fb-crud-53165.firebaseapp.com",
    projectId: "fb-crud-53165",
    storageBucket: "fb-crud-53165.appspot.com",
    messagingSenderId: "1057892431198",
    appId: "1:1057892431198:web:b58fa1477e4d01cd270bcf",
    measurementId: "G-M0BV0WGKSL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  let history = useNavigate();

    const [correo, setCorreo] = useState('');

    const [usuario, setUsuario] = useState('');

    const [contraseña,setContraseña] = useState('');

    const [contraseña2,setContraseña2] = useState('');

    const irPrincipal = (e) => {
        e.preventDefault();
        if(contraseña===contraseña2){
            try {
                const docRef = addDoc(collection(db, "usuarios"), {
                    id: nextId(),
                    correo: correo,
                    usuario: usuario,
                    contraseña: contraseña
                });
                console.log("Document written with ID: ", docRef.id);
                history("/principal");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

    }

    return (
        <div className="form-login">
            <h3>Introduce correo electronico</h3>
            <input placeholder='Correo electronico' value={correo} onChange={e=>setCorreo(e.target.value)} />
            <h3>Introduce tu nombre de usuario</h3>
            <input placeholder='Usuario' value={usuario} onChange={e=>setUsuario(e.target.value)} />
            <h3>Introduce tu contraseña</h3>
            <input placeholder='contraseña' type='password'
            value={contraseña} onChange={e=>setContraseña(e.target.value)} /><br/>
            <h3>Confirma tu contraseña</h3>
            <input placeholder='contraseña' type='password'
            value={contraseña2} onChange={e=>setContraseña2(e.target.value)} /><br/>
            <button onClick={irPrincipal} >Ingresar</button> <br/>
            <button onClick={()=>setNuevo(!nuevo)} >Ya soy usuario</button>
            <br/><br/>
        </div>
    )
}

export default NewUserForm;