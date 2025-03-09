const express = require("express");
const bookspath = require("./routes/books")
const path = require('path');
const app = express();

app.use(express.json());

// app.get('/.well-known/discord', (req, res) => {
//     res.send('dh=8ee670f64dcb1be6a82e7786bc7d379cc4559a8f');
// });


app.use("/api/books",bookspath)


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});



// Running the server
const port = 80;
app.listen(port, () => {
    console.log(`the app is listening on port ${port}`);
});