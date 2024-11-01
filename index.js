const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https://vercel.live; " +
      "font-src 'self'; " +
      "frame-src 'self' https://vercel.live/; " +
      "form-action 'self';"
  );
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
