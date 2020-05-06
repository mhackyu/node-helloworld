const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ msg: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
})