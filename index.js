import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes  from './routes/users.js';

const app = express();
const PORT = 5500;


app.use(bodyParser.json());

app.use('/users',usersRoutes);

// Routers 
app.get('/', (req, res) =>{res.send('hello from home page ')});





// app listining
app.listen(PORT, ()=> {console.log(`Server is Runnign on port http://localhost:${PORT}`)});