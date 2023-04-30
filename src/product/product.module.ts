import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from 'src/category/category.module';
import categorySchema, {
  category,
} from 'src/category/categorySchema/category.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { product, productSchema } from './productSchema/product.schema';

@Module({
  imports: [
    CategoryModule,
    CloudinaryModule,
    MongooseModule.forFeature([{ name: product.name, schema: productSchema }]),
    MongooseModule.forFeature([
      { name: category.name, schema: categorySchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
