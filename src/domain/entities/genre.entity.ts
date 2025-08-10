import z from "zod";

const GenreSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
});

type GenreProperties = z.infer<typeof GenreSchema>;

// export type LoadAllGenreInput = {
//   paginationParameters: PaginationParameters;
//   signal: AbortSignal;
// };
//
// export type LoadAllGenreOutput = Pagination<GenreEntity>;

export class GenreEntity implements GenreProperties {
  id!: string;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date | undefined;

  constructor(properties: GenreProperties) {
    const parsedProperties = GenreSchema.parse(properties);
    Object.assign(this, parsedProperties);
  }

  static with(genre: GenreProperties): GenreEntity {
    return new GenreEntity(genre);
  }
}
