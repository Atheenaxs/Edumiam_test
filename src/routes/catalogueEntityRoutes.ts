import { Router } from 'express';
import CatalogueEntity from '../models/CatalogueEntity';

const router = Router();

router.get('/', async (req, res) => {
  const entities = await CatalogueEntity.find();
  res.json(entities);
});

router.post('/', async (req, res) => {
  const { name, price, days } = req.body;
  const entity = new CatalogueEntity({ name, price, days });
  await entity.save();
  res.status(201).json(entity);
});

export default router;
