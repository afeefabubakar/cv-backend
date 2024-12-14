import educationService from '@services/education.service';
import { Request, Response } from 'express';

export async function processCreateEducation(req: Request, res: Response) {
  const profileId = req.query.profileId as string;
  const data = req.body;

  console.log(profileId, data);

  const structuredData = {
    ...data,
    cityId: data.location,
  };

  delete structuredData.location;

  try {
    const education = await educationService.createEducation(
      profileId,
      structuredData
    );

    res.json({
      message: 'Education created successfully',
      education,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processUpdateEducation(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;

  const structuredData = {
    ...data,
    cityId: data.location,
  };

  delete structuredData.location;

  try {
    const education = await educationService.updateEducation(
      id,
      structuredData
    );
    res.json({ message: 'Education updated successfully', education });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processDeleteEducation(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const education = await educationService.deleteEducation(id);
    res.json({ message: 'Education deleted successfully', education });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
