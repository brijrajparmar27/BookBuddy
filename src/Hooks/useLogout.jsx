import { auth } from "../Firebase/config";
import useAuth from "./useAuth";

const useLogout = ()=>{
    const {user,setUser} = useAuth();
    const logout = async ()=>{
        try{
            const res = await auth.signOut()
            setUser(null);
        }
        catch(e)
        {
            alert(e.message)
        }
    }
    return {logout}
}
export default useLogout;