import { useState } from "react";

function Booking() {
    const [gustName, setGuestName] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (gustName === "" || checkIn === "" || checkOut === "") {
            alert("All booking fields are required");
            return;
        }

        alert("Booking confirmed");
    }

    return(
        <div>
            <h1>Book a Room</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Guest Name" 
                    value={gustName}
                    onChange={(e) => setGuestName(e.target.value)}/>

                    <input 
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)} />

                    <input 
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)} />

                    <button type="submit">Confirm Booking</button>

                    
            </form>
        </div>
    );
}

export default Booking;