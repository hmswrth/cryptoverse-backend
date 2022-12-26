const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const info = require("./api/info");
const coinNews = require("./api/coinNews");
const coinRank = require("./api/coinRank");

const PORT = process.env.PORT || "8080";

// express server
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ extended: false }));

// Logging
app.use(morgan("dev"));

//endpoints
app.use("/info", info);

app.use("/coin_ranking", coinRank);

// app.use(
//   "/coin_ranking/",
//   createProxyMiddleware({
//     target: COINRANKING_URL,
//     changeOrigin: true,
//     pathRewrite: {
//       [`^/coin_ranking`]: "",
//     },
//   })
// );

app.use("/coin_news", coinNews);

// app.use(
//   "/coin_news/",
//   createProxyMiddleware({
//     target: COINNEWS_URL,
//     changeOrigin: true,
//     pathRewrite: {
//       [`^/coin_news`]: "",
//     },
//   })
// );

app.listen(PORT, () => {
  console.log(`Starting Proxy at ${PORT}`);
});
