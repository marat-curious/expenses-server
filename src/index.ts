import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Application'));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
