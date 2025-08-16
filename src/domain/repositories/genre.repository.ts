import { GenreEntity } from "@/domain/entities/index.js";

export type GenreRepository = {
  loadAll(): Promise<GenreEntity[]>;
};
