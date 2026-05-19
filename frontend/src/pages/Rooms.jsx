import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import Navbar from "../components/Navbar";

function Rooms(){
    return(
        <>
        

        <div className="rooms-page">
            <h1 className="rooms-title">Available Rooms</h1>

            <div className="rooms-container">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ) )}
            </div>
        </div>
        </>
    );
}

export default Rooms;