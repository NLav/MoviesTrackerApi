import { Pagination, PaginationParameters } from "@/application/dtos";
import { GenreEntity } from "@/domain/entities";
import { Genre } from "@/infrastructure/persistence/typeorm/entities";

export type CreateGenreInput = Pick<Genre, "name">;
export type CreateGenreOutput = Genre;

export type LoadAllGenresInput = {
  searchValue?: string;
};
export type LoadAllGenresOutput = GenreEntity[];

export type LoadPaginatedGenresInput = PaginationParameters;
export type LoadPaginatedGenresOutput = Pagination<GenreEntity>;

export type GenreRepository = {
  create(input: CreateGenreInput): Promise<CreateGenreOutput>;
  loadAll(input: LoadAllGenresInput): Promise<LoadAllGenresOutput>;
  loadPaginated(
    input: LoadPaginatedGenresInput
  ): Promise<LoadPaginatedGenresOutput>;
};
