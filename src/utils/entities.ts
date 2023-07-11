import { SwapiEntities } from '../configs/routes';
const regex = /\/api\/(\w+)\/\d+\//;

export function isEntity(url: string, entity: SwapiEntities) {
  const match = url.match(regex);
  if (!match) return false;
  return match[1] === entity;
}

export function getEntity(url: string) {
  const match = url.match(regex);
  console.log({ match });
  if (!match) return null;
  return match[1];
}
