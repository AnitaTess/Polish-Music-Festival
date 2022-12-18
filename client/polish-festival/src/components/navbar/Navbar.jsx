import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () =>{
    const { user } = useContext(AuthContext);
    const logout = async (e) => {
        e.preventDefault(); 
        localStorage.clear();
        window.location.reload(false); }

    return(
        <div className="navbar">
        <div className="navContainer">
        <div className="left">
        <Link to="/" style={{color:"white", textDecoration:"none"}}>
        <img className="logoImg" src="../../../logo.png" alt="logo"/>
        </Link>
        <Link to="/" style={{color:"white", textDecoration:"none"}}>
            <span className="logo">PMF</span>
            </Link>
            </div>
            <div className="navItems">
            <a href="/about" className="linkto">About</a>
            <a href="/contact" className="linkto">Contact</a>
            {user ? <button onClick={logout} className="navButton">Log Out</button> : (
                <div className="navItems">
                <button className="navButton"><a className="linktoo" href="/register">Register</a></button>
                <button className="navButton"><a className="linktoo" href="/login">Login</a></button>
                </div>
                )}
            </div>
        </div>
        </div>
    )
}
export default Navbar