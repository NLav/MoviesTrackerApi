import { Like, Repository } from "typeorm";

import { Pagination } from "@/application/dtos";
import { GenreEntity } from "@/domain/entities";
import {
  GenreRepository,
  LoadAllGenresInput,
  LoadAllGenresOutput,
  LoadPaginatedGenresInput,
} from "@/domain/repositories";

import { Genre } from "../entities";

export class TypeOrmGenreRepository implements GenreRepository {
  constructor(private readonly repository: Repository<Genre>) {}

  async loadAll(input: LoadAllGenresInput): Promise<LoadAllGenresOutput> {
    const genres = await this.repository.find({
      where: {
        ...(input.searchValue
          ? { name: Like(`%${input.searchValue}%`) }
          : undefined),
      },
    });

    const validatedGenres = genres.map((genre) =>
      GenreEntity.with({
        id: genre.id,
        name: genre.name,
        createdAt: genre.createdAt,
        updatedAt: genre.updatedAt,
        deletedAt: genre.deletedAt,
      })
    );

    return validatedGenres;
  }

  async loadPaginated(
    input: LoadPaginatedGenresInput
  ): Promise<Pagination<GenreEntity>> {
    const [genres, quantity] = await this.repository.findAndCount({
      skip: (Number(input.page) - 1) * Number(input.limit),
      take: Number(input.limit),
    });

    const validatedGenres = genres.map((genre) =>
      GenreEntity.with({
        id: genre.id,
        name: genre.name,
        createdAt: genre.createdAt,
        updatedAt: genre.updatedAt,
        deletedAt: genre.deletedAt,
      })
    );

    return {
      items: validatedGenres,
      meta: {
        page: Number(input.page),
        totalPages: Math.ceil(quantity / Number(input.limit)),
      },
    };
  }
}
