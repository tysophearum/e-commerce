const multer = require("multer")
const express = require("express")
const router = express.Router()
const Product = require("../model/product")
const fs = require("fs")

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname.replace(/\s+/g, ''));
    },
})

const upload = multer({
    storage: Storage
})

router.post("/", upload.single("image"), async (req, res) => {
    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        imageLink: "http://localhost:3000/images/" + req.file.filename
    })

    try {
        let product = await newProduct.save()
        res.json(product)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get("/all", async (req, res) => {
    try {
        let allProducts = await Product.find()
        res.json(allProducts)
    } catch (error) {
        res.json({ message: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    let product = await Product.findById(req.params.id)

    const filePath = `./uploads/images/${product.image}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.json({message : err.message});
        } else {
            product.deleteOne()
            res.json({message : 'Product deleted successfully.'});
        }
    });
})

module.exports = router