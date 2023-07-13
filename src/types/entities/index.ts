import { type SwapiFilm } from './films';
import { type SwapiPerson } from './people';
import { type SwapiPlanet } from './planets';
import { type SwapiSpecie } from './species';
import { type SwapiStarship } from './starships';
import { type SwapiVehicle } from './vehicles';

export type SwapiItems =
  | SwapiFilm
  | SwapiPerson
  | SwapiPlanet
  | SwapiSpecie
  | SwapiStarship
  | SwapiVehicle;

export { type SwapiFilm } from './films';
export { type SwapiPerson } from './people';
export { type SwapiPlanet } from './planets';
export { type SwapiResponse } from './response';
export { type SwapiSpecie } from './species';
export { type SwapiStarship } from './starships';
export { type SwapiVehicle } from './vehicles';
