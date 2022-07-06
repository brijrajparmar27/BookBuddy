import { useState } from "react";
import { auth } from "../Firebase/config";
import useAuth from "./useAuth";

const useLogin = ()=>{
    const {setUser} = useAuth();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const login = async (email,pass)=>{
        try{
            setLoading(true);
            const res = await auth.signInWithEmailAndPassword(email,pass)
            setUser(res.user);
        }
        catch(e)
        {
            setError(e);
            setLoading(false);
        }
    }
    return {login,loading,error}
}
export default useLogin;