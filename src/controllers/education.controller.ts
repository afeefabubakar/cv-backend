import educationService from '@services/education.routes';
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
