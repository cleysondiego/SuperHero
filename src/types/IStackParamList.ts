import { IHero } from './IHero';

export type IStackParamList = {
  Home: undefined;
  Details: {
    hero: IHero;
  }
}
