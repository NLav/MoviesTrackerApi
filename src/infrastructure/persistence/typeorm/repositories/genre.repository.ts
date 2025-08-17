import { Like, Repository } from "typeorm";

import { GenreEntity } from "@/domain/entities";
import { GenreRepository, LoadAllGenresInput } from "@/domain/repositories";

import { Genre } from "../entities";

export class TypeOrmGenreRepository implements GenreRepository {
  constructor(private readonly repository: Repository<Genre>) {}

  async loadAll(input: LoadAllGenresInput): Promise<GenreEntity[]> {
    const genres = await this.repository.find({
      where: {
        ...(input.searchValue
          ? { name: Like(`%${input.searchValue}%`) }
          : undefined),
      },
    });

    return genres.map((genre) =>
      GenreEntity.with({
        id: genre.id,
        name: genre.name,
        createdAt: genre.createdAt,
        updatedAt: genre.updatedAt,
        deletedAt: genre.deletedAt,
      })
    );
  }
}
