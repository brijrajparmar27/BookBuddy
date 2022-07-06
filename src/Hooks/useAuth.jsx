import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuth = ()=>{

    const {user,setUser,authIsReady} = useContext(AuthContext);
    return {user,setUser,authIsReady}
}

export default useAuth;