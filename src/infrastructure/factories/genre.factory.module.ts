import { Module } from "@nestjs/common";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";

import { LoadAllGenresUsecase } from "@/domain/usecases/genre";

import { Genre } from "../persistence/typeorm/entities";
import { TypeOrmGenreRepository } from "../persistence/typeorm/repositories";

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
