import { Schema, model } from 'mongoose';

export interface IActivity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

const ActivitySchema = new Schema<IActivity>({
  activity: { type: String },
  type: { type: String },
  participants: { type: Number },
  price: { type: Number, default: 0 },
  link: { type: String },
  key: { type: String, unique: true, required: true },
  accessibility: { type: Number, default: 0 },
});

export const ActivityModel = model<IActivity>('Activity', ActivitySchema);
