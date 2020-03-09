import express from 'express';

const healthCheckRouter = new express.Router().get('', (req, res) => {
  res.send({
    connection: true,
    version: '0.01223'
  });
});

console.log(healthCheckRouter);

export default healthCheckRouter;
