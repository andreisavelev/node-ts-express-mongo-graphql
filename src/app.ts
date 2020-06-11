import express from 'express';

const app = express();

app.use((res, req, next) => {
  console.log('In the middleware!');
  next();
});

app.use((req, res, next) =>{
  console.log('In an another middleware');
  res.send('<h1>Middleware header</h1>');
})

 app.listen(3001);
