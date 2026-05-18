import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [first_name, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setPassword2] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (first_name === "" || surname === "" || email === "" || password === "") {
            alert("All fields are required");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        else {
            alert("Registration Successful");
            window.location.reload();
        }
    }

    return(
        <div className="reg_spacing">
            <h1>Register with us Today for Free</h1>
            <div className="center">
                <h2>Why Sign Up?</h2>
                <div>
                    Become a member and enjoy the full extent of our services. We are happy to present to you some of the following features available to members!
                </div>
                <h3>All your Bookings in One Place</h3>
                <div>
                    Gain access to our booking dashboard, where you can see and manage all details of your previous and future visits with us.
                </div>
                <h3>Manage your Bookings Easily</h3>
                <div>
                    Amend or cancel your bookings quickly and easily with our straight-forward booking management system.
                </div>
                <h3>Exclusive Discounts and Offers</h3>
                <div>
                    Sign up to our newsletter to avoid missing out on exclusive deals available to our members!
                </div>
            </div>
            <div className="registration_login-form">
            <form onSubmit={handleSubmit}>
                <div className="columns">
                    <div className="rows">
                        <label htmlFor="register-first-name">First Name</label>
                        <label htmlFor="register-surname">Surname</label>
                    </div>
                    <div className="rows">
                        <input
                        id="register-first-name"
                        type="text"
                        placeholder="First Name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                        <input
                        id="register-surname"
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                        />
                    </div>
                </div>
                <label htmlFor="register-email">Email</label>
                <input 
                    id="register-email"
                    type="email"
                    placeholder="123@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                 />
                <div className="column">
                    <div className="rows">
                        <label htmlFor="register-password">Password</label>
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <div className="rows">
                        <input
                            id="register-password" 
                            type="password"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (e.length < 6) {
                                e.setCustomValidity("Password must be at least 6 characters");
                                return;
                                }
                                else {
                                    input.setCustomValidity ("");
                                }
                            }}
                            required
                        />
                        <input
                            id="confirm-password"
                            type="password"
                            placeholder="**********"
                            value={confirm_password}
                            onChange={(e) => {
                                setPassword2(e.target.value)
                                if (e !== password) {
                                e.setCustomValidity("Password Must be Matching")
                                }
                            }}

                        />
                    </div>
                </div>
                <div className="rows-skewed">
                    <input
                    id="notification-checkbox"
                    type="checkbox"
                    />
                    <p>I would like to receive marketing offers and promotional material with exclusive discounts from us via email.</p>
                </div>
                <button type="submit">Register</button>
            </form>
            </div>
        </div>
    );
}

export default Register;