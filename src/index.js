const express = require("express")
const mongoose = require("mongoose")
require("./connect/connection")
const User = require("./schema/userschemasjs")
const Prroduct = require("./schema/productSchema")
// const Product = require("./")
const port = 8000;
const cors = require("cors");
const { PromiseProvider, get } = require("mongoose");
const Product = require("./schema/productSchema");
const app = express()


app.use(express.json())
app.use(cors())
//user user post Api
app.post("/users", async (req, res) => {
    const userData = new User(req.body)
    try {
        let resultData = await userData.save()
        resultData = resultData.toObject() //delete the password
        delete resultData.password
        res.send(resultData)
        // console.log(resultData)
    } catch (error) {
        console.log(error)
    }

})

//user user Login Api
app.post("/login", async (req, res) => {
    //  res.send(req.body)
    try {
        const user = req.body
        if (user.password && user.email) {
            const newData = await User.findOne(user).select("-password")
            if (newData) {
                res.send(newData)
                // console.log(newData)
            }
            else {
                res.send("Not found")
            }
        }
        else {
            res.send("Not found")
        }

    } catch (error) {
        console.log(error)
    }
})

//product APi
app.post("/product", async (req, res) => {
    const productData = new Prroduct(req.body)
    try {
        let resultData = await productData.save()
        res.send(resultData)
        // console.log(resultData)
    } catch (error) {
        console.log(error)
    }
})

// get all list of products from db
app.get("/products", async (req, res) => {
    try {
        const getData = Product
        const resultProducts = await getData.find()
        res.send(resultProducts)
        // console.log(resultProducts)
    } catch (error) {
        res.send(error)
    }
})
//delete product with id api
app.delete("/product/:id", async (req, res) => {
    const delete_withId = req.params.id
    try {
        const deleting = Product //Product is collection name
        const deleteResult = await deleting.findOneAndDelete({ _id: delete_withId })
        res.send(deleteResult)
        // console.log(deleteResult);
    }
    catch (error) {
        res.send(error);
    }
})

//find one data api from db
app.get("/product/:id", async (req, res) => {
    let resultData = await Product.findOne({ _id: req.params.id })
    if (resultData) {
        res.send(resultData)
        // console.log(resultData)
    }
    else {
        res.send({ resultData: "No result Founds" })
    }
})

//Update  the Products API from db
app.put("/product/:id", async (req, res) => {
    const update_with_id = req.params.id
    const updates = Product
    try {
        const updaingProducts = await updates.findOneAndUpdate({ _id: update_with_id }, { $set: req.body })
        res.send(updaingProducts)
        // console.log(updaingProducts);
    } catch (error) {
        res.send(error)
    }
})
//  serch product by key api
app.get("/search/:key", async (req, res) => {
    const searchwith_key = req.params.key
    const searching = Product
    try {
        const searchResults = await searching.find({ "$or": [
            { name: { $regex: searchwith_key } },
            { company: { $regex: searchwith_key } },
            { category: { $regex: searchwith_key } },
            { price: { $regex: searchwith_key } },
        ] })
        res.send(searchResults)
        console.log(searchResults)
    } catch (error) {
        res.send(error)
    }
})


app.listen(port, () => {
    console.log("port")
})
