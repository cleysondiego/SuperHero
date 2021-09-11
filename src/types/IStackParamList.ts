import { IHero } from './IHero';

export type IStackParamList = {
  Home: undefined;
  SearchHero: undefined;
  Details: {
    hero: IHero;
  }
}
