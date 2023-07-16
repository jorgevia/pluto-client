import {
  FilmDetail,
  PersonDetail,
  PlanetDetail,
  SpeciesDetail,
  StarshipDetail,
  VehicleDetail
} from '../components/SwapiDetail/entitiesDetail';
import {
  FilmsList,
  PeopleList,
  PlanetsList,
  SpeciesList,
  StarshipsList,
  VehiclesList
} from '../components/SwapiList/entititiesList';
import { SwapiItems } from '../types/entities';
import { SwapiEntities } from './routes';

export const entityListComponent: {
  [key in SwapiEntities]: React.FC<{
    data: SwapiItems;
  }>;
} = {
  films: FilmsList,
  people: PeopleList,
  planets: PlanetsList,
  species: SpeciesList,
  starships: StarshipsList,
  vehicles: VehiclesList
};

export const entityDetailComponent: {
  [key in SwapiEntities]: React.FC<{
    data: SwapiItems;
  }>;
} = {
  films: FilmDetail,
  people: PersonDetail,
  planets: PlanetDetail,
  species: SpeciesDetail,
  starships: StarshipDetail,
  vehicles: VehicleDetail
};
