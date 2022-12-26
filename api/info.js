const express = require('express')
const router = express.Router()
require('dotenv').config()

router.get('/', (req, res) => {
    res.status(200).send('proxy server for cryptoverse')
})

module.exports = router