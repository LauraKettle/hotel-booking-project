import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms(){
    return(
        <div>
            <h1>Available Rooms</h1>

            {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
}

export default Rooms;