const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-com",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connection is succssfuly"))
    .catch((err) => {
        console.log("database error", err)
    })