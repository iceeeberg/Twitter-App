const express = require ('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3000;
require('dotenv').config()
const token = process.env.BEARER_TOKEN;

app.use("/", express.static(path.join(__dirname, 'client/build')));

app.get('/api/tweets/random',(req, res) => {

  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/search/tweets.json?q=lebronjames&lang=en`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      res.send(response.data)
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500);
  })
});

app.get('/api/tweets/users', (req, res) => {

  const userName = req.query.search_term;

  axios ({
    method: 'get',
    url: `https://api.twitter.com/1.1/users/show.json?screen_name=${userName}&count=5`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      res.send(response.data)
      console.log(response.data)
  })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500);
  })
});


app.listen(port, () => {
  console.log(`server is listening on ${port}!`);
});