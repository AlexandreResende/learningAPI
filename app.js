
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

//importar as rotas da aplicação
const anticipationRoute = require('./api/routes/anticipation.route');

const app = express();
const port = process.env.PORT || 3000;

app
  .use(helmet())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(anticipationRoute)
  .listen(port, () => {console.log(`Server running on ${port}`);});