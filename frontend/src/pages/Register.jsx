import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name === "" || email === "" || password ==="") {
            alert("All fields are required");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        alert("Registration Successful");
    }

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="123@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                 />

                 <input 
                    type="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;