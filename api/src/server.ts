import '@dotenvx/dotenvx';
import * as express from 'express';
import connect from './dbconnect';
import postRoute from './routers/post';


const app: express.Express = express();
const { PORT } = process.env;

connect()
  .then(() => {
    app.use('/post', postRoute);

    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })

export { app };
