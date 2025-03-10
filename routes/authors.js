const express = require("express");
const router = express.Router();
const Joi = require("joi");


const authors = [
    {
        id:1,
        Name:"Ahmed",
        lastName:"Hadi",
        nationality:"Yeman",
        image:"default-image.png"
    },
    {
        id:2,
        Name:"George",
        lastName:"Floyd",
        nationality:"Negrostan",
        image:"default-image.png"
    },
    {
        id:3,
        Name:"bashar",
        lastName:"Al-assad",
        nationality:"Syria",
        image:"default-image.png"
    },
];


// get
router.get("/",(req,rse) => {
    rse.json(authors);
})


router.get("/:id",(req,rse) => {
    const author = authors.find(a => a.id === parseInt(req.params.id))
    if(author){
        rse.json(author);
    }else{
        rse.status(404).send("Aurthor not found")
    }
    
})
// post

router.post("/", (req,rse) => {
    const {error} = vaildateCreateAuthor(req.body);

    if(error){
        return rse.status(400).json({massage: error.details[0].massage})
    }

    const author = {
        id:authors.length + 1,
        Name: req.body.Name,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
        image:"default-image.png"
    }

    authors.push(author);
    rse.status(201).json(author)
})

// put






// delete




// functions

function vaildateCreateAuthor(obj) {
    const schema = Joi.object({
        Name: Joi.string().trim().min(0).max(30).required(),
        lastName: Joi.string().trim().min(0).max(30).required(),
        nationality: Joi.string().min(0).max(30).required(),
    })

    return schema.validate(obj)
};


function vaildateUpdateAuthor(obj) {
    const schema = Joi.object({
        Name: Joi.string().trim().min(3).max(200),
        lastName: Joi.string().trim().min(3).max(500),
        nationality: Joi.number().min(0),
    })

    return schema.validate(obj)
};


module.exports = router;