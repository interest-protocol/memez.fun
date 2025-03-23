export enum RoutesEnum {
  Home = 'home',
  CreateCoin = 'create-coin',
  SignIn = 'sign-in',
  CreateProfile = 'create-profile',
  Profile = 'profile',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.CreateProfile]: '/profile/create',
  [RoutesEnum.Profile]: '/profile',
  [RoutesEnum.CreateCoin]: '/create-coin',
  [RoutesEnum.SignIn]: '/sign-in',
  [RoutesEnum.Home]: '/',
};
