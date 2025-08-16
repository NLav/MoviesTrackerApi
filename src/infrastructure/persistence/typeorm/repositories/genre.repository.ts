import { Repository } from "typeorm";

import { GenreEntity } from "@/domain/entities/index.js";
import { GenreRepository } from "@/domain/repositories/index.js";

import { Genre } from "../entities/index.js";

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
