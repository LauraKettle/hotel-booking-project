import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); //loads env variables

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

//Rooms data
const rooms = [
        {
        id: 1, 
        name: "standard room",
        location: "Rome, Italy",
        price: 120
        },

        {
            id: 2, 
            name: "Deluxe Room",
            location: "Paris, France",
            price: 200
        },

        {
            id: 3,
            name: "Family Room",
            location: "Lisbon, Portugal",
            price: 250
        },

        {
            id: 4, 
            name: "Double Room",
            location: "coasta Brava, Spain",
            price: 175
        }
    ];

//home route

app.get("/", (req, res) => {
    res.send("Server is running");
});


//rooms API

 app.get("/api/rooms", (req, res) => {
    res.json(rooms);
});

//single room

app.get("/api/rooms/:id", (req, res) => {
     const roomId = Number(req.params.id);

    const room = rooms.find((room) => room.id === roomId);

     if (!room) {
        return res.status(404).json({
            message: "Room not found"
        });
    }

     res.json(room);

});
   
//start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
