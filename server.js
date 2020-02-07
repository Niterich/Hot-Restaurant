// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "index.html"))
});

app.get("/tables", function(req, res) {
    res.sendfile(path.join(__dirname, "tables.html"))
});

app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "resi.html"))
});

app.get("/api/tables", function(req, res) {
    res.sendfile(path.join(__dirname, "apitable.html"))
});

app.get("/api/waitlist", function(req, res) {
    res.sendfile(path.join(__dirname, "resi.html"))
});


app.post("/reserve", function (req, res) {
    
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
