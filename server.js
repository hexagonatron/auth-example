const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require("dotenv").config();
const fetch = require('node-fetch');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: [ process.env.AUTH0_DOMAIN ],
  algorithms: ['RS256'],
});

app.get("/api/noAuth", (req, res) => {
  res.json({result: "Response Success"});
});

app.get("/api/withAuth", checkJwt, (req, res) => {
  console.log(req.user);
  res.json({result: "Authed successfully", user: req.user});
});

app.get("/api/user", checkJwt, async (req, res) => {
  const result = await fetch(`${process.env.AUTH0_DOMAIN}userinfo`, {
    headers: {Authorization: req.headers.authorization}
  }).then(res => res.json());
  console.log(result);
  res.json({result: "Authed successfullt", userInfo: result});
});



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
