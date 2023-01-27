import express from 'express';
import layout from 'express-ejs-layouts';
import router from './routers/main.router.js';
import dataModel from './models/orders.model.js';
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 3000
app.set('view engine', 'ejs');

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(layout);
app.use('/', router);



app.listen(PORT, () => console.log('Server is runnig PORT: 3000'))