import { SwapiEntities } from './routes';

export type entityGroups = SwapiEntities | 'characters' | 'residents' | 'pilots';

export const entityToName: {
  [key in entityGroups]: string;
} = {
  films: 'Films',
  people: 'People',
  planets: 'Planets',
  species: 'Species',
  starships: 'Starships',
  vehicles: 'Vehicles',
  characters: 'Characters',
  residents: 'Residents',
  pilots: 'Pilots'
};

export const translateToEntity: {
  [key in entityGroups]: SwapiEntities;
} = {
  films: 'films',
  people: 'people',
  characters: 'people',
  residents: 'people',
  pilots: 'people',
  planets: 'planets',
  species: 'species',
  starships: 'starships',
  vehicles: 'vehicles'
};
