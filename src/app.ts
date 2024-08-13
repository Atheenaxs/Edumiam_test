import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import connectDB from './database';
import catalogueEntityRoutes from './routes/catalogueEntityRoutes';
import learnerRoutes from './routes/learnerRoutes';
import catalogueItemRoutes from './routes/catalogueItemRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Servir la vue Admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

// Servir la vue Learner
app.get('/learner', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'learner.html'));
});

// API Routes
app.use('/api/catalogue-entities', catalogueEntityRoutes);
app.use('/api/learners', learnerRoutes);
app.use('/api/catalogue-items', catalogueItemRoutes);

// Connect to Database
connectDB();

export default app;
