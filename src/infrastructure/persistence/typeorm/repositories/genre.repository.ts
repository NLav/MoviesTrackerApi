import { Like, Repository } from "typeorm";

import { Pagination } from "@/application/dtos";
import { GenreEntity } from "@/domain/entities";
import {
  CreateGenreInput,
  CreateGenreOutput,
  DeleteGenreInput,
  DeleteGenreOutput,
  GenreRepository,
  LoadAllGenresInput,
  LoadAllGenresOutput,
  LoadPaginatedGenresInput,
} from "@/domain/repositories";

export class TypeOrmGenreRepository implements GenreRepository {
  constructor(private readonly repository: Repository<Genre>) {}

  async create(input: CreateGenreInput): Promise<CreateGenreOutput> {
    const genre = await this.repository.save(input);
    const validatedGenre = GenreEntity.with(genre);

    return validatedGenre;
  }

  async delete(input: DeleteGenreInput): Promise<DeleteGenreOutput> {
    const genre = await this.repository.findOne({
      where: {
        id: input.id,
      },
    });

    if (!genre) throw new Error("Invalid ID");

    await this.repository.delete(genre.id);

    return genre;
  }

  async loadAll(input: LoadAllGenresInput): Promise<LoadAllGenresOutput> {
    const where = {
      ...(input.searchValue
        ? { name: Like(`%${input.searchValue}%`) }
        : undefined),
    };

    const genres = await this.repository.find({
      where,
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
