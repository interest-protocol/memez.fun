export enum RoutesEnum {
  Home = 'home',
  CreateCoin = 'create-coin',
  SignIn = 'sign-in',
  CreateProfile = 'create-profile',
  Profile = 'profile',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.CreateProfile]: '/create-profile',
  [RoutesEnum.Profile]: '/profile',
  [RoutesEnum.CreateCoin]: '/create-coin',
  [RoutesEnum.SignIn]: '/sign-in',
  [RoutesEnum.Home]: '/',
};
