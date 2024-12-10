import { Router } from 'express';
import profileRoutes from './profile.routes';

const root = Router();
const api = Router();

root.get('/', (req, res) => {
  res.json({
    message: "Afeef's CV Backend",
  });
});
root.use('/api', api);

api.use('/profile', profileRoutes);

export default root;
