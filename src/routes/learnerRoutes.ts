import { Router } from 'express';
import Learner from '../models/Learner';
import CatalogueItem from '../models/CatalogueItem';

const router = Router();

router.get('/', async (req, res) => {
    const learners = await Learner.find();
    res.json(learners);
});

router.post('/', async (req, res) => {
    const { firstName, lastName, age, catalogueEntityId } = req.body;

    try {
        let learner = await Learner.findOne({ firstName, lastName, age });

        if (!learner) {
            learner = new Learner({ firstName, lastName, age });
            await learner.save();
        }

        const existingItem = await CatalogueItem.findOne({
            catalogueEntityId,
            learnerId: learner._id
        });

        if (existingItem) {
            return res.status(400).json({ success: false, message: 'Already enrolled in this course.' });
        }

        const newItem = new CatalogueItem({
            catalogueEntityId,
            learnerId: learner._id,
            startDate: new Date()
        });

        await newItem.save();

        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;
