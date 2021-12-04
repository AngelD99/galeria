import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const LoginGoogle = () => {

    let navigate = useNavigate();

    const responseGoogle = (res) => {
        console.log(res);
    }

    const responseGoogleSuc = (res) => {
        navigate('/principal');
    }

    return (
        <div>
            <GoogleLogin
                clientId="338158929389-ts1st3gqquarh0gflc02eub7hho3k1m6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogleSuc}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginGoogle;