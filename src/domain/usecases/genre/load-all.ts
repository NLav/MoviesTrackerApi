import { GenreEntity } from "@/domain/entities/index.js";
import { GenreRepository } from "@/domain/repositories/index.js";

export class LoadAllGenresUsecase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(): Promise<GenreEntity[]> {
    return this.genreRepository.loadAll();
  }
}
