import express from 'express'
import axios from 'axios'
import { memeList } from '../index.js'
import { nanoid } from 'nanoid'

export const router = express.Router()




router.get("/api/local", (req, res) => {
    try {
        res.json(memeList)
    }catch(err) {
        res.send(500).json(err.message)
    }
})


router.get("/api/meme", (req, res) => {
    
    try {
        const requestOptions = {
            url: 'https://api.imgflip.com/get_memes',
            method: 'GET',
            json: {},
        };
        
        axios.request(requestOptions).then(function (response) {
            res.json(response.data)
            console.log(response.data)
        })
        
    } catch(err) {
        res.status(500).json(err.message)
    }
})



router.post("/api/local", (req, res) => {
    try {
        if(!req.body || (!req.body.name || !req.body.url)) {
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


