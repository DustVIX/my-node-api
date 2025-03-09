const express = require("express");
const bookspath = require("./routes/books")

const app = express();

app.use(express.json());

// app.get('/.well-known/discord', (req, res) => {
//     res.send('dh=8ee670f64dcb1be6a82e7786bc7d379cc4559a8f');
// });


reouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.use("/api/books",bookspath)




// Running the server
const port = 80;
app.listen(port, () => {
    console.log(`the app is listening on port ${port}`);
});