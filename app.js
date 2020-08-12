const express = require('express');
const app = express();
const port = 3000;

//ROUTES
app.get('/', (req, res) => {
  res.send("We're in ROOT");
});

app.get('/posts', (req, res) => {
  res.send("We're in POSTS");
});

app.listen(port, () => {
  console.log(
    `=========================\nSever up on port ${port}\n=========================`
  );
});
