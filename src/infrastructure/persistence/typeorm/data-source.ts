import { DataSource } from "typeorm";

import { Genre } from "./entities/index.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "admin",
  database: "movies-tracker-database",
  synchronize: true,
  logging: true,
  entities: [Genre],
  migrations: ["dist/infrastructure/persistence/typeorm/migrations/*.js"],
  subscribers: [],
});
