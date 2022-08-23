import express from 'express'
import { nanoid } from 'nanoid'

export const router = express.Router()




router.post("/api/courses", (req, res) => {
    res.send("POST")
});




router.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})

