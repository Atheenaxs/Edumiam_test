import mongoose, { Schema, Document } from 'mongoose';
import { ICatalogueItem } from '../interfaces/ICatalogueItem';
import CatalogueEntity from './CatalogueEntity';

const CatalogueItemSchema: Schema<ICatalogueItem> = new Schema({
  catalogueEntityId: { type: Schema.Types.ObjectId, ref: 'CatalogueEntity', required: true },
  learnerId: { type: Schema.Types.ObjectId, ref: 'Learner', required: true },
  startDate: { type: Date, required: true }
});

CatalogueItemSchema.index({ catalogueEntityId: 1, learnerId: 1 }, { unique: true });

CatalogueItemSchema.methods.getEndDate = async function(): Promise<Date> {
    const catalogueEntity = await CatalogueEntity.findById(this.catalogueEntityId).exec();
    if (!catalogueEntity) throw new Error('CatalogueEntity not found');
  
    return new Date(this.startDate.getTime() + (catalogueEntity.days * 24 * 60 * 60 * 1000));
};

export default mongoose.model<ICatalogueItem & Document>('CatalogueItem', CatalogueItemSchema);
