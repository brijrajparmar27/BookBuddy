import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../../Hooks/useAuth";
import useLogin from "../../Hooks/useLogin";
import "./Login.css";

const Login = ()=>{
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const {login,loading,error} = useLogin();

    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        user && navigate("/");
    },[user])

    const handleLogin = ()=>{
        login(email,pass);
    }
    
    return <div className="Login">
        <h2>Login</h2>
        <div className="loginForm">
            <h4>Email</h4>
            <input onChange={e=>{setEmail(e.target.value.trim())}} type="text"/>
            <h4>Password</h4>
            <input onChange={e=>{setPass(e.target.value.trim())}} type="text"/>
            {error && <p className="error">{error.message}</p>}
            <button className="submit_btn" onClick={handleLogin}>{loading?"Loading":"Login"}</button>
            <Link to="/signup">Dont have an account? signup.</Link>
        </div>
    </div>
}

export default Login;