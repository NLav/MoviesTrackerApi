import { Pagination, PaginationParameters } from "@/application/dtos";
import { GenreEntity } from "@/domain/entities";

export type LoadAllGenresInput = {
  searchValue?: string;
};

export type LoadAllGenresOutput = GenreEntity[];

export type LoadPaginatedGenresInput = PaginationParameters;

export type LoadPaginatedGenresOutput = Pagination<GenreEntity>;

export type GenreRepository = {
  loadAll(input: LoadAllGenresInput): Promise<LoadAllGenresOutput>;
  loadPaginated(
    input: LoadPaginatedGenresInput
  ): Promise<LoadPaginatedGenresOutput>;
};
