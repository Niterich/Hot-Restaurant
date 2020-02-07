const express = require("express");
const path = ("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})