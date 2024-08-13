import { Document, ObjectId } from 'mongoose';

export interface ICatalogueItem extends Document {
  catalogueEntityId: ObjectId;
  learnerId: ObjectId;
  startDate: Date;
  getEndDate(): Date;
}