import express from 'express'; 
import bodyParser from 'body-parser';
import path from 'path';  

import {rootRouter} from './routes/root.js';
import {addToTimeTableRouter} from './routes/addToTimeTable.js';
import __dirname from './util/rootpath.js';

const app = express();
const PORT = 3002; 

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/",rootRouter);
app.use("/addToTimeTable", addToTimeTableRouter);


app.listen(PORT, () => {
    console.log(`app is running on port http://localhost:${PORT}`);  
});