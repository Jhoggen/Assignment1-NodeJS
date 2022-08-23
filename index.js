import express from "express";
import { router as getMemeRouter } from './routers/get.js'
import { router as postMemeRouter } from './routers/post.js'

const app = express();


app.use(express.json());
app.use(express.static("./client"))
app.use("/get", getMemeRouter)
app.use("/post", postMemeRouter)




app.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})