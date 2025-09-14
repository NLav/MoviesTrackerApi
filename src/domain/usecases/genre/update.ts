import { Inject } from "@nestjs/common";

import {
  GenreRepository,
  UpdateGenreInput,
  UpdateGenreOutput,
} from "@/domain/repositories";

export class UpdateGenreUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: UpdateGenreInput): Promise<UpdateGenreOutput> {
    return this.genreRepository.update(input);
  }
}
