const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send({ msg: 'Hello World!', env: process.env.SAMPLE });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
})
