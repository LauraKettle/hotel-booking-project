import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; 
import searchIcon from "../assets/searchIcon.svg";


function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();  
    const isHomePage = location.pathname === "/";
    
    useEffect(() => {
        function handleScroll(){
            setScrolled(window.scrollY > 80);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <nav className={`navbar ${scrolled ? "scrolled" : ""} ${!isHomePage ? "other-page" : ""}`}>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <div className="nav-actions">
                <Link to="/search" className="search-link">
                <img src={searchIcon} alt="search" className="search-icon" />
                </Link>

                <Link to="/login" className="login-button">Login
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;