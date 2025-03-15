import { FC, ReactNode } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface CollapseMenusProps {
  title: string;
  show: boolean;
  Icon?: FC<SVGProps>;
  onClick: () => void;
  collapseInfo: ReactNode;
}
