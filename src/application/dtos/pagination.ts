export type PaginationParameters = {
  page: string;
  limit: string;
};

type PaginationMeta = {
  page: number;
  totalPages: number;
};

export type Pagination<T> = {
  items: T[];
  meta: PaginationMeta;
};
