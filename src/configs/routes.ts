export const swapiRoutes = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
] as const;

export type SwapiEntities = (typeof swapiRoutes)[number];

export const getSwapiRoute = (url: string) => {
  return url.replace('https://swapi.dev/api', '').slice(0, -1);
};
