import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import createCategoryDto from './categoryDto/createCategory.dto';
import { category } from './categorySchema/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(category.name) private categoryModel: Model<category>,
  ) {}
  async create(createCategoryDto: createCategoryDto): Promise<category> {
    try {
      const createCategory = new this.categoryModel(createCategoryDto);
      return createCategory.save();
    } catch (err) {
      return err.message;
    }
  }

  async findAll(): Promise<category[]> {
    return this.categoryModel.find().exec();
  }
}
