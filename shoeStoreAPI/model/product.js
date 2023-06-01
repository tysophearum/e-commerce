const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("product", productSchema)