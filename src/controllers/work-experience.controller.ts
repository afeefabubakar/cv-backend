import { Prisma } from '@prisma/client';
import workExperienceService from '../services/work-experience.service';
import { Request, Response } from 'express';

export async function processAddWorkExperience(req: Request, res: Response) {
  const profileId = req.query.profileId as string;
  const data = req.body;

  if (!profileId) {
    res.status(400).json({ message: 'Profile ID is required' });
  }

  const structuredData = {
    ...data,
    cityId: data.location,
  };

  delete structuredData.location;

  try {
    const workExperience = await workExperienceService.addWorkExperience(
      profileId,
      structuredData
    );
    res.json({
      message: 'Work experience created successfully',
      workExperience,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({
        message: 'Failed to create work experience',
        errors: error.message,
      });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function processUpdateWorkExperience(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const structuredData = {
      ...data,
      cityId: data.location,
    };

    delete structuredData.location;

    const workExperience = await workExperienceService.updateWorkExperience(
      id,
      data
    );

    res.json({
      message: 'Work experience updated successfully',
      workExperience,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processDeleteWorkExperience(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const workExperience = await workExperienceService.deleteWorkExperience(id);

    res.json({
      message: 'Work experience deleted successfully',
      workExperience,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}