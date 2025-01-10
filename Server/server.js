import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import path from 'path'

const corsOption = {
    origin: "https://imagify-p4zz.onrender.com",
    Credential:true
}


const PORT = process.env.PORT || 4000;
const app = express()

const _dirname = path.resolve();

app.use(express.json())
await connectDB();

app.use(cors(corsOption))

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)


app.use(express.static(path.join(_dirname, "/Client/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname, "Client", "dist", "index.html"));
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

