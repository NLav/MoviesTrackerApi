import { Inject } from "@nestjs/common";

import {
  DeleteGenreInput,
  DeleteGenreOutput,
  GenreRepository,
} from "@/domain/repositories";

export class DeleteGenreUsecase {
  constructor(
    @Inject("GenreProvider")
    private readonly genreRepository: GenreRepository
  ) {}

  async execute(input: DeleteGenreInput): Promise<DeleteGenreOutput> {
    return this.genreRepository.delete(input);
  }
}
