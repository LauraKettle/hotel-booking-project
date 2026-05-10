import { useParams, Link } from "react-router-dom";
import rooms from "../data/rooms";

function RoomDetails() {
    const {id} = useParams();

    const room= rooms.find((room) => room.id === Number(id));

    if (!room) {
        return <h2>Room not Found</h2>;
    }

    return(
        <div>
            <h1>{room.name}</h1>
            <img src={room.image} alt={room.name} />
            <p>{room.description}</p>
            <p>Price: €{room.price} per night</p>

            <Link to="/booking">Book this Room</Link>
        </div>
    );
}

export default RoomDetails;