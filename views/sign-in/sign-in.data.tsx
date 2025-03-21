import { ReactNode } from 'react';
import unikey from 'unikey';

import { SignInHeaderProps, SignInStepEnum } from './sign-in.types';
import CreateProfiileStep from './steps/create-profile-step';
import SignInStep from './steps/sign-in-step';

export const SignInHeaderData: ReadonlyArray<SignInHeaderProps> = [
  {
    title: 'Create profile',
    step: SignInStepEnum.CreateProfileProps,
  },
  {
    title: 'Sign in',
    description: 'Welcome back. Select method to log in',
    step: SignInStepEnum.SignInProps,
  },
];

export const SignViewStep: ReadonlyArray<ReactNode> = [
  <CreateProfiileStep key={unikey()} />,
  <SignInStep key={unikey()} />,
];
