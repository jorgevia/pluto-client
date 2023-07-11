export const swapiRoutes = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
] as const;

export type SwapiEntities = (typeof swapiRoutes)[number];

export const routesToPageName: { [key in SwapiEntities]: string } = {
  films: 'Films',
  people: 'People',
  planets: 'Planets',
  species: 'Species',
  starships: 'Starships',
  vehicles: 'Vehicles'
};

export const getSwapiRoute = (url: string) => {
  return url.replace('https://swapi.dev/api', '').slice(0, -1);
};
