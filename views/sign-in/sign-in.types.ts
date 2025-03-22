export interface CreateProfileProps {
  avatar: string;
  userName: string;
  description: string;
}

export interface SignInProps {
  username: string;
  password: string;
}

export enum SignInStepEnum {
  CreateProfileProps,
  SignInProps,
}

export interface SignInHeaderProps {
  title: string;
  description?: string;
  step: SignInStepEnum;
}

export interface SignInForm {
  avatar: string;
  step: number;
  username: string;
  password: string;
  description: string;
  success: boolean;
}
