import { GenreEntity } from "@/domain/entities";
import { GenreRepository } from "@/domain/repositories";

export class LoadAllGenresUsecase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(): Promise<GenreEntity[]> {
    return this.genreRepository.loadAll();
  }
}
