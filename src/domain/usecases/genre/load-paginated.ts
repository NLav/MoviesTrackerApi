import { Inject } from "@nestjs/common";

import {
  GenreRepository,
  LoadPaginatedGenresInput,
  LoadPaginatedGenresOutput,
} from "@/domain/repositories";

export class LoadPaginatedGenresUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(
    input: LoadPaginatedGenresInput
  ): Promise<LoadPaginatedGenresOutput> {
    return this.genreRepository.loadPaginated(input);
  }
}
