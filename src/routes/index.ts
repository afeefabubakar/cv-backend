import educationRoutes from './education.routes';
import locationRoutes from './location.routes';
import profileRoutes from './profile.routes';
import skillRoutes from './skill.routes';
import workExperienceRoutes from './work-experience.routes';
import { Router } from 'express';

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
api.use('/skill', skillRoutes);

export default root;
