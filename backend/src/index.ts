
import { MONGO_URI, PORT } from './config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes';
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(router);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( () => app.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`);
}))
.catch( console.log );