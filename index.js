import express from "express";
import cors from "cors"
import axios from "axios";

import { router as getMemeRouter } from './routers/get.js'
import { router as postMemeRouter } from './routers/post.js'
import { nanoid } from "nanoid";



const app = express();

app.use(express.static("client"))
app.use(express.json());
app.use(cors())

app.use(getMemeRouter)
app.use(postMemeRouter)


export const memeList = [
    {
        id: nanoid(),
        name: "MemeOne",
    },
    {
        id: nanoid(),
        name: "MemeTwo",
    },
    {
        id: nanoid(),
        name: "MemeThree",
    },
]



app.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: http://localhost: ${port}`))