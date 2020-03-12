const express = require('express');
const app = express();

const todos = require('./todos');

app.get('/', (req, res) => {
  res.send({success: true, data: {message: "ok"}});
});

app.use('/todos', todos);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log('listening on port 3000'));

