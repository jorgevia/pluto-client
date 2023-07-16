export interface SwapiResponse<t> {
  count: number;
  next: string;
  previous: string;
  results: t;
}
