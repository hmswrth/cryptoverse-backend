const express = require('express')
const router = express.Router()
require('dotenv').config()

const COINRANKING_URL = process.env.COINRANKAPI_URL;

const { createProxyMiddleware } = require("http-proxy-middleware");


router.use('/', 
    createProxyMiddleware({
      target: COINRANKING_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^/coin_ranking`]: "",
      },
    })
)


module.exports = router;