import { Controller, Get, Query } from "@nestjs/common";

import { GenreEntity } from "@/domain/entities";
import { LoadAllGenresInput } from "@/domain/repositories";
import { LoadAllGenresUsecase } from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(private readonly loadAllGenres: LoadAllGenresUsecase) {}

  @Get()
  async getAll(@Query() input: LoadAllGenresInput): Promise<GenreEntity[]> {
    return this.loadAllGenres.execute(input);
  }
}
