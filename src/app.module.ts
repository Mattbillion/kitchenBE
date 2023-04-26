import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';

import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    MongooseModule.forRoot(
      'mongodb+srv://database:1234@cluster0.pxig3vm.mongodb.net/test?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
