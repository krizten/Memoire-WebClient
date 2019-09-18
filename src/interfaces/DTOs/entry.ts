import { Coordinates } from '../coordinates';

export interface EntryDTO {
  title: string;
  content: string;
  image?: string;
  geolocation?: Coordinates;
}
