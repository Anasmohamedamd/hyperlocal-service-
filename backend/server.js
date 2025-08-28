const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require('./Routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);


const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(() => { console.log('MongoDB connected')
}).catch((err) => {
    console.log('Error:',err);
})

app.listen(PORT,() => {
    console.log(`the server is running on ${PORT}`)
})
