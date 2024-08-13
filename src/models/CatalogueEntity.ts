import mongoose, { Schema, Document } from 'mongoose';
import { ICatalogueEntity } from '../interfaces/ICatalogueEntity';

const CatalogueEntitySchema: Schema<ICatalogueEntity> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  days: { type: Number, required: true }
});

CatalogueEntitySchema.methods.getPricePerDay = function(): number {
  return this.price / this.days;
};

export default mongoose.model<ICatalogueEntity & Document>('CatalogueEntity', CatalogueEntitySchema);
