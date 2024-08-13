import express from 'express';
import CatalogueItem from '../models/CatalogueItem';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { learnerId, catalogueEntityId, startDate } = req.body;
        const newCatalogueItem = new CatalogueItem({ learnerId, catalogueEntityId, startDate });
        await newCatalogueItem.save();
        res.status(201).json(newCatalogueItem);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
});

export default router;
