import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";

import {
  CreateGenreInput,
  CreateGenreOutput,
  DeleteGenreOutput,
  LoadAllGenresInput,
  LoadAllGenresOutput,
  LoadPaginatedGenresInput,
  LoadPaginatedGenresOutput,
} from "@/domain/repositories";
import {
  CreateGenreUsecase,
  DeleteGenreUsecase,
  LoadAllGenresUsecase,
  LoadPaginatedGenresUsecase,
} from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(
    private readonly createGenre: CreateGenreUsecase,
    private readonly deleteGenre: DeleteGenreUsecase,
    private readonly loadAllGenres: LoadAllGenresUsecase,
    private readonly loadPaginatedGenres: LoadPaginatedGenresUsecase
  ) {}

  @Post()
  async create(@Body() input: CreateGenreInput): Promise<CreateGenreOutput> {
    return this.createGenre.execute(input);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<DeleteGenreOutput> {
    return this.deleteGenre.execute({ id });
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
