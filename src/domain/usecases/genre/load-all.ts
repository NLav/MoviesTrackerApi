import { Inject } from "@nestjs/common";

import {
  GenreRepository,
  LoadAllGenresInput,
  LoadAllGenresOutput,
} from "@/domain/repositories";

export class LoadAllGenresUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: LoadAllGenresInput): Promise<LoadAllGenresOutput> {
    return this.genreRepository.loadAll(input);
  }
}
