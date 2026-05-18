import { useState } from "react";
import { Link } from "react-router-dom";
import BackImage from "../assets/HotelLobby.png";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if(email === "" || password === "") {
            alert("Email and password are required");
            return;
        }

        alert("Login successful");
    }

    return(
        <div className="reg_spacing" style={{backgroundImage: `url(${BackImage})`}}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "white"}}>
                <h1>Login</h1>
                <input 
                    type="email"
                    placeholder="123@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>

                <input 
                    type="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required/>

                <button type="submit">Login</button>
                <p>No Account? <Link to="/register">Register with us Now!</Link></p>
            </form>
        </div>
    );
}

export default Login;