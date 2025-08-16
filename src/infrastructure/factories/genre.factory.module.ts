import { Module } from "@nestjs/common";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";

import { LoadAllGenresUsecase } from "@/domain/usecases/genre/load-all.js";

import { Genre } from "../persistence/typeorm/entities/index.js";
import { TypeOrmGenreRepository } from "../persistence/typeorm/repositories/index.js";

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [
    {
      provide: "GenreRepository",
      useFactory: (repository) => new TypeOrmGenreRepository(repository),
      inject: [getRepositoryToken(Genre)],
    },
    LoadAllGenresUsecase,
  ],
  exports: [LoadAllGenresUsecase],
})
export class GenreFactoryModule {}
