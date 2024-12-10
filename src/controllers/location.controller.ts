import locationService from '@services/location.service';
import { Request, Response } from 'express';

export async function handleGetAllLocations(req: Request, res: Response) {
  try {
    const locations = await locationService.getAllLocations();

    res.json({
      message: 'Locations fetched successfully',
      data: locations,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
