import { Inject } from "@nestjs/common";

import { GenreEntity } from "@/domain/entities";
import { GenreRepository, LoadAllGenresInput } from "@/domain/repositories";

export class LoadAllGenresUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: LoadAllGenresInput): Promise<GenreEntity[]> {
    return this.genreRepository.loadAll(input);
  }
}
