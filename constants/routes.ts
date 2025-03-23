export enum RoutesEnum {
  Home = 'home',
  CreateCoin = 'create-coin',
  SignIn = 'sign-in',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.CreateCoin]: '/create-coin',
  [RoutesEnum.SignIn]: '/sign-in',
  [RoutesEnum.Home]: '/',
};
