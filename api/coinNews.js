const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");


const COINNEWS_URL = process.env.BINGNEWS_URL;

router.use(
  "/",
  createProxyMiddleware({
    target: COINNEWS_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/coin_news`]: "",
    },
  })
);

module.exports = router;
