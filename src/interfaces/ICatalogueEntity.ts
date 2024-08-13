import { Document } from 'mongoose';

export interface ICatalogueEntity extends Document {
  name: string;
  price: number;
  days: number;
  getPricePerDay(): number;
}
