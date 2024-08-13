import { Document } from 'mongoose';

export interface ILearner extends Document {
  firstName: string;
  lastName: string;
  age: number;
}
