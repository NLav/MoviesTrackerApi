import { Controller, Get } from "@nestjs/common";

import { GenreEntity } from "@/domain/entities";
import { LoadAllGenresUsecase } from "@/domain/usecases/genre";

@Controller("genres")
export class GenreController {
  constructor(private readonly loadAllGenres: LoadAllGenresUsecase) {}

  @Get()
  async getAll(): Promise<GenreEntity[]> {
    return this.loadAllGenres.execute();
  }
}
