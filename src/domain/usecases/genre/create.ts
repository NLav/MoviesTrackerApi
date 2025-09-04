import { Inject } from "@nestjs/common";

import {
  CreateGenreInput,
  CreateGenreOutput,
  GenreRepository,
} from "@/domain/repositories";

export class CreateGenreUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: CreateGenreInput): Promise<CreateGenreOutput> {
    return this.genreRepository.create(input);
  }
}
