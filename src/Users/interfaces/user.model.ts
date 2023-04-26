import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from 'src/category/schemas/category.schema';

@Schema({ timestamps: true })
export class User {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  // _id: string;

  @Prop({ type: String })
  img: string;

  @Prop()
  foodname: string;

  @Prop()
  price: number;

  @Prop({ type: String })
  desc: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: Category;
}

export const UserSchema = SchemaFactory.createForClass(User);
