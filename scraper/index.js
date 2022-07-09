const express = require('express');
const auth_route = require('./mangaDex/auth_route.js')

const app = express();
const port = 3000;

app.use(express.json());

app.post('/auth', auth_route)

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});