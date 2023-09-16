import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    const currentPath = window.location.pathname;
    //currentPath='/'
    function getActiveClass(path) {
        return currentPath === path ? "active" : "";
    }
    return (
        <div className="nav">
            <span className="webname">CoffieStore</span>
           
            <Link to="/" className={getActiveClass('/')}>Home</Link>
            <Link to="/About" className={getActiveClass('/About')}>About</Link>
            <Link to="/Product" className={getActiveClass('/Product')}>Product</Link>

        </div>

    )

}