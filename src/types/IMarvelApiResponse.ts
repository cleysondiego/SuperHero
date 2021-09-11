import { IHero } from './IHero';

export interface IMarvelApiResponse {
  data: {
    results: IHero[]
  }
}