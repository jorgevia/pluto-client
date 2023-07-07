import { SwapiPerson } from '../types/people';

export const getPeople = async (): Promise<SwapiPerson[]> => {
  const results = await fetch('/products.json');
  const products = results.json();
  return products;
};
