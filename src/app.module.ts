import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forRoot('your url database', { useNewUrlParser: true }),
    CustomerModule,

  ],
  controllers: [AppController, ],
  providers: [AppService,],
})
export class AppModule {}
