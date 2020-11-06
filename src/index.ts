import * as express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => res.send('Application'));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
