import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { AppController } from '../app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'dist', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
