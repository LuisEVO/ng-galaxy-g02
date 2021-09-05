export interface Paginable<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}