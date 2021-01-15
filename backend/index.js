const { MONGO_URI, PORT } = require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use( require('./routes') );

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( resp => app.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`);
}))
.catch( console.log );