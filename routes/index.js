const fs = require('fs')
const router = require('express').Router();
const id = require('uniqid')
const db = require('./db/db.json')


router.get('api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err, data) => {
        console.log(JSON.parse(data))
    })
})