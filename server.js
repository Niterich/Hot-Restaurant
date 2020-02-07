const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"))
});
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });