const express = require("express");
const reouter = express.Router();
const path = require("path");
const Joi = require("joi");


const books = [
    {
        id: 1,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        prisce: 111
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        prisce: 111
    }
];

// reouter.get("/home", (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));
// });

reouter.get("/", (req,res)=>{
    res.json(books)
})

reouter.get("/:id", (req,res)=>{
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(book){
        res.json(book);
    }else{
        res.status(404).send("Book not found");
    }
});



reouter.post("/", (req,res)=> {

    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200).required(),
        author: Joi.string().trim().min(3).max(500).required(),
        prisce: Joi.number().min(0).required(),
    })

    const { error } = schema.validate(req.body)
    if (error){
        return res.status(400).json( {massage: error.details[0].message});
    }

    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        prisce: req.body.prisce
    };
    books.push(book);
    res.status(201).json(book);
});


module.exports = reouter
