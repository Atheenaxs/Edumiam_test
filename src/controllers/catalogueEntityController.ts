import { Request, Response } from 'express';
import CatalogueEntity from '../models/CatalogueEntity';

export const getCatalogueEntities = async (req: Request, res: Response) => {
  try {
    const catalogueEntities = await CatalogueEntity.find();
    res.json(catalogueEntities);
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
