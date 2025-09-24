import { Inject } from "@nestjs/common";

import {
  GenreRepository,
  LoadOneGenreInput,
  LoadOneGenreOutput,
} from "@/domain/repositories";

export class LoadOneGenreUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: LoadOneGenreInput): Promise<LoadOneGenreOutput> {
    return this.genreRepository.loadOne(input);
  }
}
