import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql from 'mysql2/promise';
import bcrypt from "bcryptjs"

dotenv.config(); //loads env variables

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;
//Database Pool Connection
const pool = await mysql.createPool({
    host: process.env.DB_HOST || 'autorack.proxy.rlwy.net',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'qwNyKJGVMdwWFloMAuFRWzSmtmlktvjS',
    database: process.env.DB_DATABASE || 'railway',
    port: process.env.DB_PORT || 17745
});

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
//registration
app.post('/api/register', async (req, res) => {
  const { first_name, surname, email, password, signup } = req.body;
  const hash_password = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (firstname, surname, email, user_password, newsletter) VALUES (?, ?, ?, ?, ?)', [first_name, surname, email, hash_password, signup]);
  res.sendStatus(201);
});
//login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
        return res.status(401).send("Username not found. Please register with us before attempting login!");
    }
    user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).send("Password is incorrect");
    }
    return res.status(200).json({
        message: "Login successful",
        user: {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            surname: user.surname
        }
    })
})   
//start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

