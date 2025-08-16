import { Inject } from "@nestjs/common";

import { GenreEntity } from "@/domain/entities";
import { GenreRepository } from "@/domain/repositories";

export class LoadAllGenresUsecase {
  constructor(
    @Inject("GenreRepository")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(): Promise<GenreEntity[]> {
    return this.genreRepository.loadAll();
  }
}
