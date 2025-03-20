export enum RoutesEnum {
  Home = 'home',
  CreateCoin = 'create-coin',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.CreateCoin]: '/create-coin',
  [RoutesEnum.Home]: '/',
};
