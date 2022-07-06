import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [authIsReady,setAuthIsReady] = useState(false);
    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user)=>{
            setUser(user);
            setAuthIsReady(true);
            unsub();
        })
    },[])
    return <AuthContext.Provider value={{user,setUser,authIsReady}}>
        {children}
    </AuthContext.Provider>
}