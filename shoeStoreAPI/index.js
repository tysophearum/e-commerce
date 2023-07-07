const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require('cors');

app.use(cors({
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "exposedHeaders": ['set-cookie']
  }));

mongoose.connect("mongodb://localhost:27017/IPCourseAPI", { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("it's connected"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const productRouter = require("./routes/products")
app.use("/product", productRouter)

app.use('/images', express.static('uploads/images'))

app.listen(3001, () => console.log("Server started at port 3000"))