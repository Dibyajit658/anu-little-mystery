
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Anu Surprise Server is Running 💗");
});

// Health check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Anu Surprise Backend Connected Successfully ✨"
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
