import express from 'express';
import layout from 'express-ejs-layouts';
import router from './routers/main.router.js';

const app = express();
const PORT = 3000
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(layout);
app.use('/', router);
app.listen(PORT, () => console.log('Server is runnig PORT: 3000'))