import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface ListProps {
  title: string;
  color?: string;
  Icon?: FC<SVGProps>;
  onClick?: () => void;
  activeToggle?: boolean;
}
