import { Request, Response } from 'express';
import CatalogueItem from '../models/CatalogueItem';

export const createCatalogueItem = async (req: Request, res: Response) => {
  try {
    const catalogueItem = new CatalogueItem(req.body);
    await catalogueItem.save();
    res.status(201).json(catalogueItem);
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
