import { Router } from 'express';
import profileRoutes from './profile.routes';
import workExperienceRoutes from './work-experience.routes';
import locationRoutes from './location.routes';
import educationRoutes from './education.routes';

const root = Router();
const api = Router();

root.get('/', (req, res) => {
  res.json({
    message: "Afeef's CV Backend",
  });
});
root.use('/api', api);

api.use('/profile', profileRoutes);
api.use('/work-experience', workExperienceRoutes);
api.use('/location', locationRoutes);
api.use('/education', educationRoutes);

export default root;
