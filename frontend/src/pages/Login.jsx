import { useState } from "react";

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
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="123@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input 
                    type="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;