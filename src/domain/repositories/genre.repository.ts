import { GenreEntity } from "@/domain/entities";

export type LoadAllGenresInput = {
  searchValue?: string;
};

export type GenreRepository = {
  loadAll(input: LoadAllGenresInput): Promise<GenreEntity[]>;
};
