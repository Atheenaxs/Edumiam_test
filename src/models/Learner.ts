import mongoose, { Schema } from 'mongoose';
import { ILearner } from '../interfaces/ILearner';

const LearnerSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true }
});

LearnerSchema.index({ firstName: 1, lastName: 1, age: 1 }, { unique: true });

export default mongoose.model<ILearner>('Learner', LearnerSchema);
