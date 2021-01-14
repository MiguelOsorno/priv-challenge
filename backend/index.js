const { MONGO_URI, PORT } = require('./config');
const app = require('./app/app');
const mongoose = require('mongoose');

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