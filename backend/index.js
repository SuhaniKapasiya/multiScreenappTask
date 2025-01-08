const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const database = require('./config/database');

const carousalRoutes = require('./routes/carousalRoutes');
const chartRoutes = require('./routes/chartRoutes');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Allow your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);

database.connect();

app.use(express.json());

app.use("/api/carousals", carousalRoutes);
app.use("/api/charts", chartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});