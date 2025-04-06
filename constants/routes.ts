export enum RoutesEnum {
  Home = 'home',
  CreateCoin = 'create-coin',
  CreateProfile = 'create-profile',
  Profile = 'profile',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.CreateProfile]: '/create-profile',
  [RoutesEnum.Profile]: '/profile',
  [RoutesEnum.CreateCoin]: '/create-coin',
  [RoutesEnum.Home]: '/',
};
