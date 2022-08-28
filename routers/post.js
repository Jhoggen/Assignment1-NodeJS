import express from 'express'
import { nanoid } from 'nanoid'
import { memeList } from '../index.js'

export const router = express.Router()





router.post("/api/local", (req, res) => {
    try {
        if(!req.body || (!req.body.name)) {
            throw new Error("Data was not provided correctly")
        }
        
        const memeExists = memeList.find(meme => meme.id == req.body.name)
        
        if(memeExists) {
            throw new Error("Meme already exist")
        }
        
        let newMeme = req.body
        newMeme.id = nanoid()
        memeList.push(newMeme)

        res.json({status: "New meme added!"})
        
    } catch(err) {
        res.status(400).json(err.message)
    }
});




router.use((err, req, res, next) => {
    console.log(err.status);
    console.log(err.message);
    res.status(500).json(err);
})