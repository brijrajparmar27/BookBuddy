import { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import useAuth from "../../Hooks/useAuth";
import useSignup from "../../Hooks/useSignup";

import "./Signup.css";

const Signup = ()=>{
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const {signup,loading,error} = useSignup();

    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        user && navigate("/");
    },[user])

    const handleSignup = ()=>{
        signup(email,pass);
    }

    return <div className="Signup">
        <h2>Sign up</h2>
        <div className="signupForm">
            <h4>Email</h4>
            <input onChange={e=>{setEmail(e.target.value.trim())}} type="text"/>
            <h4>Password</h4>
            <input onChange={e=>{setPass(e.target.value.trim())}} type="text"/>
            {error && <p className="error">{error.message}</p>}
            <button className="submit_btn" onClick={handleSignup}>{loading?"Loading":"Signup"}</button>
            <Link to="/login">Already have an account? Login.</Link>
            
        </div>
    </div>
}

export default Signup;