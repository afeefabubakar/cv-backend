import { NextFunction, Request, Response } from 'express';

export async function getProfiles(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    res.json({
      message: 'Get profile',
      data: {},
    });
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
}
