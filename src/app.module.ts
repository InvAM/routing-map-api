import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'ADRIAN-PC\\SQLEXPRESS', 
      port: 1433,
      username: 'sa',
      password: '7raM4rR14',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      }
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
