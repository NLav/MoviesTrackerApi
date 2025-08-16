import { Repository } from "typeorm";

import { GenreEntity } from "@/domain/entities";
import { GenreRepository } from "@/domain/repositories";

import { Genre } from "../entities";

export class TypeOrmGenreRepository implements GenreRepository {
  constructor(private readonly repository: Repository<Genre>) {}

  async loadAll(): Promise<GenreEntity[]> {
    const genres = await this.repository.find();

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
