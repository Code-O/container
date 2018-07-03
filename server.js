const express = require('express');
const { exec } = require('child_process');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/check', (req, res, nex) => {
  res.json('inside docker');
});

app.post('/secApp', (req, res, next) => {
  exec(`node test "${req.body.code}"`, (error, stdout, stderr) => {
    if (error) console.log(error);
    console.log('RESULT FROM DOCKER: ', stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
