import { Request, Response } from 'express';
import miscService from '../services/misc.service';

export async function handleGetMisc(req: Request, res: Response) {
  const profileId = req.params.profileId;

  try {
    const misc = await miscService.getMisc(profileId);
    res.json({ message: 'Misc fetched successfully', data: misc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processCreateMisc(req: Request, res: Response) {
  const profileId = req.query.profileId as string;
  const item = req.body;

  try {
    const misc = await miscService.createMisc(profileId, item);
    res.json({ message: 'Misc created successfully', data: misc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processDeleteMisc(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await miscService.deleteMisc(id);
    res.json({ message: 'Misc deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
