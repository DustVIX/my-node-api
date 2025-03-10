const express = require("express");
const booksPath = require("./routes/books");
const authorsPath = require("./routes/authors")
const bagesPath = require("./routes/bages")
const app = express();

app.use(express.json());


app.use("/api/books",booksPath);
app.use("/api/authors",authorsPath);
app.use("/",bagesPath);


// Running the server
const port = 80;
app.listen(port, () => {
    console.log(`the app is listening on port ${port}`);
});