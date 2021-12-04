import FormLogin from "./components/FormLogin";
import './Login.css'
import React, {useState} from "react";
import NewUserForm from "./components/NewUserForm";

const Login = () => {

    const [nuevo, setNuevo] = useState(false);

    return (
        <div className='login'>
            {nuevo? <NewUserForm nuevo={nuevo} setNuevo={setNuevo} /> 
            : <FormLogin nuevo={nuevo} setNuevo={setNuevo} />}
            
        </div>
    );
}

export default Login;