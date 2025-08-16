import { GenreEntity } from "@/domain/entities";

export type GenreRepository = {
  loadAll(): Promise<GenreEntity[]>;
};
