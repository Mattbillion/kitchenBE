import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { category } from 'src/category/categorySchema/category.schema';

export type productDocument = HydratedDocument<product>;

@Schema()
export class product {
  // @Prop()
  // img: string;
  @Prop()
  title: string;
  @Prop()
  desc: string;
  @Prop()
  price: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'category' })
  category: category;
}

export const productSchema = SchemaFactory.createForClass(product);
