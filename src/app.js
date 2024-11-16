const express = require('express');
const { userRoute, loginRoute, categorieRoute, postRoute } = require('./routes');

// ...

const app = express();

app.use((req, res, next) => {
  console.log('Recebida solicitação:', req.method, req.url);
  next();
});

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categorieRoute);
app.use('/post', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
