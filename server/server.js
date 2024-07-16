const express=require('express');
const app=express();
const port=5000;
require('./db');
const bodyParser=require('body-parser');
const cors=require('cors');

const userRouter=require('./routes/userRoutes');
const conditionRouter=require('./routes/conditionRoutes');
const corsOptions={
    origin: ['http://localhost:5173',]
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/user',userRouter);
app.use('/condition',conditionRouter);

app.listen(port,()=>{
    console.log('listening on port 5000')
})