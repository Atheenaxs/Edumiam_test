import { Request, Response } from 'express';
import Learner from '../models/Learner';

export const createLearner = async (req: Request, res: Response) => {
  try {
    const learner = new Learner(req.body);
    await learner.save();
    res.status(201).json(learner);
  } catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    } else {
        console.error('An unknown error occurred');
        res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
