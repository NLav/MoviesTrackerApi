import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
  UpdateGenreInput,
  UpdateGenreOutput,
} from "@/domain/repositories";
import {
  CreateGenreUsecase,
  DeleteGenreUsecase,
  LoadAllGenresUsecase,
  LoadPaginatedGenresUsecase,
  UpdateGenreUsecase,
} from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(
    private readonly createGenre: CreateGenreUsecase,
    private readonly loadAllGenres: LoadAllGenresUsecase,
    private readonly loadPaginatedGenres: LoadPaginatedGenresUsecase,
    private readonly updateGenre: UpdateGenreUsecase,
    private readonly deleteGenre: DeleteGenreUsecase
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

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() input: Omit<UpdateGenreInput, "id">
  ): Promise<UpdateGenreOutput> {
    return this.updateGenre.execute({ id, ...input });
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<DeleteGenreOutput> {
    return this.deleteGenre.execute({ id });
  }
}
