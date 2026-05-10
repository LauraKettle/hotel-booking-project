import { Link } from "react-router-dom";

function RoomCard({room}) {
    return (
        <div className="room-card">
            <div className="image-box">
                {room.bestseller && (
                    <span className="badge">Best Seller</span>
                )}

                <img src={room.image} alt={room.name} />
            </div>

            <div className="room-card-body">
                <h3>{room.name}</h3>
                <p className="rating">
                    * <span>5.0</span>
                </p>

                <p className="location">
                    Rome, Italy
                </p>

                <div className="card-bottom">
                    <p className="price">
                        €{room.price} per night
                    </p>

                    <Link to={`/rooms/${room.id}`}
                    className="book-button">
                        Book Now
                        
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default RoomCard;