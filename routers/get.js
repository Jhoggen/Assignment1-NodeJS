import express from 'express'
import { nanoid } from 'nanoid'

export const router = express.Router()


const loggedIn = true



router.get("/api", (req, res) => {
    res.json("GET");
});



router.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})

