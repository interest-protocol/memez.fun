import { ComponentType, ReactNode } from 'react';

export interface DetailsCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
  title: ReactNode;
  description: string;
  isVestingPeriod?: boolean;
}
