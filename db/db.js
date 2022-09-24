

const mongoose = require('mongoose');
require('dotenv').config({ path: "../.env" });

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
})



