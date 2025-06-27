import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT), // Default MySQL port
      username: process.env.DATABASE_USER, // Your MySQL username (root in this case)
      password: process.env.DATABASE_PASSWORD, // Password, leave empty for XAMPP default
      database: process.env.DATABASE, // The database you created in phpMyAdmin
      // entities: ALLENTITIES, // Add your enties in the constant array for less redudancy
      synchronize: process.env.SYNCHRONIZE === 'true', // Automatically syncs your database (use cautiously in production)
      // autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
