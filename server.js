const express = require ('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = 3000;

app.use(express.static(path.join(__dirname, 'client', 'build', 'index.html')));

// app.get("/", (req, res) => {
//   console.log("Responding to root route");
//   res.send("Hello from Root!");
// });

app.get('/api',(req, res) => {

  axios({
    method: 'get',
    url: 'https://api.twitter.com/1.1/search/tweets.json?q',
    data: 'json'
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