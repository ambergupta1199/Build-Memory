import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
const app=express();

 dotenv.config();

const port=process.env.PORT||5000;
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
   
})
app.use('/posts',postRoutes);//adding a prefix /posts by default it will run with this , not with '/' this
app.get('/',(req,res)=>{
    res.send('Hello To Memories API')
    });



app.listen(port,()=>console.log(`Server running on port : ${port}`))


mongoose.set('useFindAndModify',false);