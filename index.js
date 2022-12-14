import express from "express";
import cors from "cors"

import { router as getMemeRouter } from './routers/router.js'
import { nanoid } from "nanoid";



const app = express();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

app.use(getMemeRouter)



export const memeList = [
    {
        id: nanoid(),
        name: "MemeOne",
        url: "https://i.imgflip.com/2d3al6.jpg",
    },
    {
        id: nanoid(),
        name: "MemeTwo",
        url: "https://i.imgflip.com/49z6c.jpg",
    },
    {
        id: nanoid(),
        name: "MemeThree",
        url: "https://i.imgflip.com/jrj7.jpg",
    },
]





app.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})


const port = 3000;
app.listen(port, () => console.log(`Listening on port: http://localhost: ${port}`))