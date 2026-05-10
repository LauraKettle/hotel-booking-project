import hotelRoom1 from "../assets/hotelRoom1.avif";
import hotelRoom2 from "../assets/hotelRoom2.avif";
import hotelRoom3 from "../assets/hotelRoom3.avif";


const rooms = [
    {
        id: 1, 
        name: "Standard Room", 
        price: 120,
        image: hotelRoom1,
        description: "A room with a double bed.",
        bestSeller: true
    },

     {
        id: 2, 
        name: "Deluxe Room", 
        price: 200,
        image: hotelRoom2,
        description: "A room with a King bed.",
        bestSeller: false
    },

     {
        id: 3, 
        name: "Family Room", 
        price: 250,
        image: hotelRoom3,
        description: "A room with a double bed and 2 single beds.",
        bestSeller: false
    },
];

export default rooms; 