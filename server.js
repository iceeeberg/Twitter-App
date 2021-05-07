const express = require ('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = 3000;
require('dotenv').config()
const token = process.env.BEARER_TOKEN;

app.use(express.static(path.join(__dirname, 'client', 'build', 'index.html')));

app.get('/api/tweets/random',(req, res) => {

  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/search/tweets.json?q=NBA`,
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

  axios ({
    method: 'get',
    url: `https://api.twitter.com/2/users/by/username/KingJames`,
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