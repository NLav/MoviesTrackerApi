import { Controller, Get, Query } from "@nestjs/common";

import {
  LoadAllGenresInput,
  LoadAllGenresOutput,
  LoadPaginatedGenresInput,
  LoadPaginatedGenresOutput,
} from "@/domain/repositories";
import {
  LoadAllGenresUsecase,
  LoadPaginatedGenresUsecase,
} from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(
    private readonly loadAllGenres: LoadAllGenresUsecase,
    private readonly loadPaginatedGenres: LoadPaginatedGenresUsecase
  ) {}

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
