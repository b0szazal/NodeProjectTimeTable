import express from 'express'; 
import bodyParser from 'body-parser';
import {rootRouter} from './routes/root.js';

const app = express();
const PORT = 3002; 

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/",rootRouter);


app.listen(PORT, () => {
    console.log(`app is running on port http://localhost:${PORT}`);  
});