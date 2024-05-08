import * as express from 'express';
import { Request, Response } from 'express';


const app: express.Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.listen(3030);
