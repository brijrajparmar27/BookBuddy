import useAuth from "../../Hooks/useAuth";
import useLogout from "../../Hooks/useLogout";
import "./Header.css";

const Header = ()=>{
    const {logout} = useLogout()
    const {user} = useAuth();
    const handleLogout = ()=>{
        logout();
    }
    return <div className="Header">
        <h1>Book Buddy</h1>
        {user && <div className="navigs" onClick={handleLogout}>
            Logout 
        </div>}
    </div>
}

export default Header;