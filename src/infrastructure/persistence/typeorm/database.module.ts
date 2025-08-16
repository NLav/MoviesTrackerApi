import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Genre } from "./entities";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "admin",
      password: "admin",
      database: "movies-tracker-database",
      synchronize: true,
      logging: true,
      entities: [Genre],
    }),
    TypeOrmModule.forFeature([Genre]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
