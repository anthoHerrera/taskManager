const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose
        .connect(
            url /*, {
        //if use version 6 don't do this
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    }*/
        )
        .then(() => console.log("Connected to DB..."))
        .catch((err) => console.log(err));
};

module.exports = connectDB;
