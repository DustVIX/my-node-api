const express = require("express");
const router = express.Router();
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


router.get("/", (req,res)=>{
    res.json(books)
})

router.get("/:id", (req,res)=>{
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(book){
        res.json(book);
    }else{
        res.status(404).send("Book not found");
    }
});



router.post("/", (req,res)=> {

    const {error} = vaildateCreateBook(req.body)

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


router.put("/:id", (req,res) =>{
    const {error} = vaildateUpdateBook(req.body)

    if (error){
        return res.status(400).json( {massage: error.details[0].message});
    }

    const book = books.find(b => b.id === parseInt(req.params.id))
    if(book){
        res.status(200).json({massage: "book has been updated"})
    }else(
        res.status(404).json({massage: "book not found"})
    )


});


router.delete("/:id", (req,res) =>{

    const book = books.find(b => b.id === parseInt(req.params.id))
    if(book){
        res.status(200).json({massage: "book has been deleted"})
    }else(
        res.status(404).json({massage: "book not found"})
    )


});






function vaildateCreateBook(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200).required(),
        author: Joi.string().trim().min(3).max(500).required(),
        prisce: Joi.number().min(0).required(),
    })

    return schema.validate(obj)
};


function vaildateUpdateBook(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200),
        author: Joi.string().trim().min(3).max(500),
        prisce: Joi.number().min(0),
    })

    return schema.validate(obj)
};


module.exports = router 