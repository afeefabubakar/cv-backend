import express from 'express';
import dotenv from 'dotenv';
import root from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', root);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
