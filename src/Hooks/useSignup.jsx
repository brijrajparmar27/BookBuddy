import { useState } from "react"
import { auth } from "../Firebase/config"
import useAuth from "./useAuth";

const useSignup = ()=>{

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const {user,setUser} = useAuth();

    const signup = async (email,pass)=>{
        setLoading(true);
        setError(null);
        try{
            var res = await auth.createUserWithEmailAndPassword(email,pass);
            setUser(res.user);
        }
        catch(e)
        {
            setError(e);
        }
        setLoading(false);
    }
    return {signup,error,loading}
}
export default useSignup