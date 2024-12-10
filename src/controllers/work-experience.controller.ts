import { Prisma } from '@prisma/client';
import workExperienceService from '../services/work-experience.service';
import { Request, Response } from 'express';

export async function processAddWorkExperience(req: Request, res: Response) {
  const profileId = req.query.profileId as string;
  const data = req.body;

  if (!profileId) {
    res.status(400).json({ message: 'Profile ID is required' });
  }

  try {
    const workExperience = await workExperienceService.addWorkExperience(
      profileId,
      data
    );
    res.json({
      message: 'Work experience created successfully',
      workExperience,
    });
  } catch (error) {
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
