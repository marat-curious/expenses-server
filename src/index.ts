import * as express from 'express';
import * as dotenv from 'dotenv';

import auth from './routes/auth';

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Application'));

app.use('/api', auth);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
