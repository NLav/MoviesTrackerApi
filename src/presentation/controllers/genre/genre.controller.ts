import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import {
  CreateGenreInput,
  CreateGenreOutput,
  LoadAllGenresInput,
  LoadAllGenresOutput,
  LoadPaginatedGenresInput,
  LoadPaginatedGenresOutput,
} from "@/domain/repositories";
import {
  CreateGenreUsecase,
  LoadAllGenresUsecase,
  LoadPaginatedGenresUsecase,
} from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(
    private readonly createGenre: CreateGenreUsecase,
    private readonly loadAllGenres: LoadAllGenresUsecase,
    private readonly loadPaginatedGenres: LoadPaginatedGenresUsecase
  ) {}

  @Post()
  async create(@Body() input: CreateGenreInput): Promise<CreateGenreOutput> {
    return this.createGenre.execute(input);
  }

  @Get()
  async getAll(
    @Query() input: LoadAllGenresInput | LoadPaginatedGenresInput
  ): Promise<LoadAllGenresOutput | LoadPaginatedGenresOutput> {
    if ("page" in input) {
      return this.loadPaginatedGenres.execute(input);
    }

    return this.loadAllGenres.execute(input);
  }
}
