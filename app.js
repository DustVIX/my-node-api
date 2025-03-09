const express = require("express");
const bookspath = require("./routes/books")

const app = express();

app.use(express.json());



app.use("/api/books",bookspath)




// Running the server
const port = 8080;
app.listen(port, () => {
    console.log(`the app is listening on port ${port}`);
});