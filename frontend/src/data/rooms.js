import hotelRoom1 from "../assets/hotelRoom1.avif";
import hotelRoom2 from "../assets/hotelRoom2.avif";
import hotelRoom3 from "../assets/hotelRoom3.avif";
import hotelRoom4 from "../assets/hotelRoom4.jpg";


const rooms = [
    {
        id: 1, 
        name: "Standard Room", 
        location: "Rome, Italy",
        price: 120,
        image: hotelRoom1,
        description: "A room with a double bed.",
        bestSeller: true
    },

     {
        id: 2, 
        name: "Deluxe Room", 
        location: "Paris, France",
        price: 200,
        image: hotelRoom2,
        description: "A room with a King bed.",
        bestSeller: false
    },

     {
        id: 3, 
        name: "Family Room", 
        location: "Lisbon, Portugal",
        price: 250,
        image: hotelRoom3,
        description: "A room with a double bed and 2 single beds.",
        bestSeller: false
    },

    {
        id: 4,
        name: "Double Room",
        location: "Costa Brava, Spain",
        price: 175,
        image: hotelRoom4,
        description: "A double room with a beach view.",
        bestSeller: false
    }
];

export default rooms; 