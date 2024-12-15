import skillService from '@services/skill.service';
import { Request, Response } from 'express';

export async function handleGetSkills(req: Request, res: Response) {
  const category = req.query.category as string;
  try {
    const skills = await skillService.getSkills({ category });
    res.json({ message: 'Skills fetched successfully', data: skills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processCreateSkill(req: Request, res: Response) {
  const data = req.body;

  try {
    const skill = await skillService.createSkill(data.skill, data.category);
    res.json({ message: 'Skill created successfully', data: skill });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processAddProfileSkill(req: Request, res: Response) {
  const data = req.body;
  const profileId = req.query.profileId as string;

  try {
    const skill = await skillService.addProfileSkill(profileId, data.skillId);
    res.json({ message: 'Skill added successfully', data: skill });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processDeleteProfileSkill(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await skillService.deleteProfileSkill(id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function processDeleteSkill(req: Request, res: Response) {
  const id = req.params.id;

  try {
    await skillService.deleteSkill(id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
