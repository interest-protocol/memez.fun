import { ReactNode } from 'react';
import unikey from 'unikey';

import { SignInHeaderProps, SignInStepEnum } from './sign-in.types';
import CreateProfiileStep from './steps/create-profile-step';
import SignInStep from './steps/sign-in-step';

export const SignInHeaderData: ReadonlyArray<SignInHeaderProps> = [
  {
    title: 'Sign in',
    description: 'Welcome back. Select method to log in',
    step: SignInStepEnum.SignInProps,
  },
  {
    title: 'Create profile',
    step: SignInStepEnum.CreateProfileProps,
  },
];

export const SignViewStep: ReadonlyArray<ReactNode> = [
  <SignInStep key={unikey()} />,
  <CreateProfiileStep key={unikey()} />,
];
