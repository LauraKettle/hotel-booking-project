import { useState } from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Search() {
    const [searchText, setSearchText] = useState("");

    const filteredRooms = rooms.filter((room) => 
    room.name.toLowerCase().includes(searchText.toLowerCase())
);

return(
    <div>
        <h1>Search Rooms</h1>

        <input 
            type="text"
            placeholder="Search by room name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
             />
        {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
        ))}
    </div>
);
}

export default Search;