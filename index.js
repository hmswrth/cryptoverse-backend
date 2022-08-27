const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const PORT = process.env.PORT || '8080';
// const HOST = "localhost";
const COINRANKING_URL = process.env.COINRANKAPI_URL;
const COINNEWS_URL = process.env.BINGNEWS_URL;

// express server
const app = express();

const cors = require("cors");
app.use(cors());

// Logging
app.use(morgan("dev"));

//endpoints
app.get("/info", (req, res) => {
  res.send("proxy server for cryptoverse");
});

app.use(
  "/coin_ranking/",
  createProxyMiddleware({
    target: COINRANKING_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/coin_ranking`]: "",
    },
  })
);

app.use(
  "/coin_news/",
  createProxyMiddleware({
    target: COINNEWS_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/coin_news`]: "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`Starting Proxy at ${PORT}`);
});
