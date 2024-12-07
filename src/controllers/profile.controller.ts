import ProfileServices from '@services/profile.service';
import { Request, Response } from 'express';

const profileServices = new ProfileServices();

export async function getAllProfiles(req: Request, res: Response) {
  try {
    const profiles = await profileServices.getAllProfiles();

    res.json({
      message: 'Get all profiles',
      data: profiles,
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}

export async function getProfileById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const profile = await profileServices.getProfileById(id);

    res.json({
      message: 'Get profile by ID',
      data: profile,
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}
