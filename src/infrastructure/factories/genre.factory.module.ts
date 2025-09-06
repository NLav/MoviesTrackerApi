import { Module } from "@nestjs/common";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import {
  CreateGenreUsecase,
  DeleteGenreUsecase,
  LoadAllGenresUsecase,
  LoadPaginatedGenresUsecase,
} from "@/domain/usecases/genre";

import { Genre } from "../persistence/typeorm/entities";
import { TypeOrmGenreRepository } from "../persistence/typeorm/repositories";

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [
    {
      provide: "GenreProvider",
      useFactory: (repository: Repository<Genre>) =>
        new TypeOrmGenreRepository(repository),
      inject: [getRepositoryToken(Genre)],
    },
    CreateGenreUsecase,
    DeleteGenreUsecase,
    LoadAllGenresUsecase,
    LoadPaginatedGenresUsecase,
  ],
  exports: [
    CreateGenreUsecase,
    DeleteGenreUsecase,
    LoadAllGenresUsecase,
    LoadPaginatedGenresUsecase,
  ],
})
export class GenreFactoryModule {}
