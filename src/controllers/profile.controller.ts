import userServices from '@services/profile.service';
import { Request, Response } from 'express';

export async function handleGetAllProfiles(req: Request, res: Response) {
  try {
    const profiles = await userServices.getAllProfiles();

    res.json({
      message: 'Get all profiles',
      data: profiles,
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}

export async function handleGetSpecificProfile(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const profile = await userServices.getProfileById(id);

    res.json({
      message: 'Get profile by ID',
      data: profile,
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}

export async function processUpdateProfile(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const body = req.body;

    const profile = await userServices.updateProfile(id, body);

    res.json({
      message: 'Update profile by ID',
      data: profile,
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}
