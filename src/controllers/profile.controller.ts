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
    console.error(err);
    res.status(500).send('Something went wrong');
  }
}

export async function processCreateProfile(req: Request, res: Response) {
  try {
    const body = req.body;

    const structuredData = {
      ...body,
      cityId: body.location,
    };

    delete structuredData.location;

    const profile = await userServices.createProfile(structuredData);
    res.json({ message: 'Profile created successfully', data: profile });
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
}

export async function processUpdateProfile(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const body = req.body;

    const structuredData = {
      ...body,
      cityId: body.cityId,
    };

    delete structuredData.location;

    const profile = await userServices.updateProfile(id, structuredData);

    res.json({
      message: 'Update profile by ID',
      data: profile,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
}

export async function processSetProfileLock(req: Request, res: Response) {
  const id = req.params.id;

  try {
    await userServices.setProfileLock(id);
    res.json({ message: 'Profile locked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
}
