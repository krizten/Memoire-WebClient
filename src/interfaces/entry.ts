import { Coordinates } from './coordinates';

export interface Entry {
  id: string;
  created: string;
  updated: string;
  title: string;
  content: string;
  image?: string;
  geolocation?: Coordinates;
}
